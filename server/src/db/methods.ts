import getDate from "../utils/getDate.js";
import { generateRefreshToken } from "../utils/generateRefreshToken.js";
import { generateAccessToken } from "../utils/generateAccessToken.js";

import { client } from "./postgresConn.js";
import { UserLoginData } from "../models/User.js";
import { Tag } from "../models/Tag.js";
import { Anime, AnimeCount } from "../models/Anime.js";
import {
  FIND_USER_BY_EMAIL,
  GET_ALL_ANIME,
  GET_ALL_ANIME_WITHOUT_USER,
  GET_ALL_ANIME_WITH_CATEGORY_USER,
  GET_ALL_ANIME_WITH_USER_ID,
  GET_ALL_TAGS,
  GET_ANIME_COUNT,
  GET_ANIME_WATCH_STATUS,
  GET_ONE_ANIME_WITHOUT_USER_ID,
  INSERT_INTO_CATEGORY,
  REGISTER_USER,
  REMOVE_FROM_CATEGORIES,
  UPLOAD_IMAGE,
} from "./queries.js";
import verifyToken from "../utils/verifyToken.js";

async function queryAllAnime(
  userId: string | undefined,
  searchString: string | undefined,
  tags: string[] | undefined,
  sortBy: string
) {
  try {
    if (userId) {
      const { rows } = await client.query(GET_ALL_ANIME_WITH_USER_ID(sortBy), [
        (searchString || "") + "%",
        userId,
      ]);

      const anime: EAnime[] = await Promise.all(
        rows
          .filter((row: DAnime & DTags) =>
            row.values.some((value) => {
              if (tags && tags.length > 0) return tags.includes(value);
              else return true;
            })
          )
          .map(async (row: DAnime & DTags & DUserCategory) => {
            return new Anime(
              row.anime_id,
              row.title,
              row.type,
              row.episodes,
              row.status,
              row.year,
              row.image_url,
              row.values,
              row.category ? row.category : "not-watched"
            );
          })
      );

      return anime;
    } else {
      const { rows } = await client.query(GET_ALL_ANIME(sortBy), [
        searchString || "" + "%",
      ]);

      const anime: EAnime[] = await Promise.all(
        rows
          .filter((row: DAnime & DTags) =>
            row.values.some((value) => {
              if (tags && tags.length > 0) return tags.includes(value);
              else return true;
            })
          )
          .map(async (row: DAnime & DTags) => {
            return new Anime(
              row.anime_id,
              row.title,
              row.type,
              row.episodes,
              row.status,
              row.year,
              row.image_url,
              row.values,
              "not-watched"
            );
          })
      );

      return anime;
    }
  } catch (e) {
    console.log(e);
  }
}

async function queryOneAnime(animeId: number, userId: number | undefined) {
  try {
    let watch_status = "not-watched";

    const { rows: animeData } = await client.query(
      GET_ONE_ANIME_WITHOUT_USER_ID,
      [animeId]
    );

    if (userId) {
      const { rows: watchStatus } = await client.query(GET_ANIME_WATCH_STATUS, [
        animeId,
        userId,
      ]);

      if (watchStatus.length > 0) {
        watch_status = watchStatus[0].category;
      }
    }

    const tags = animeData.map((row: DTag) => row.value);
    const row: DAnime = animeData[0];

    const anime = new Anime(
      row.anime_id,
      row.title,
      row.type,
      row.episodes,
      row.status,
      row.year,
      row.image_url,
      tags,
      watch_status
    );

    return anime;
  } catch (e) {
    console.log(e);
  }
}

async function queryAllTags() {
  try {
    const { rows } = await client.query(GET_ALL_TAGS);

    const tags: ETag[] = rows.map(
      (row: DTag) => new Tag(row.tag_id, row.value)
    );
    return tags;
  } catch (e) {
    console.log(e);
  }
}

// TODO add return if not valid
async function queryLogin(email: string, password: string) {
  try {
    const { rows } = await client.query(FIND_USER_BY_EMAIL, [email]);

    if (rows.length <= 0) {
      // TODO throw USER NOT FOUND
    }

    const user: DUser = rows[0];

    if (user.password !== password) {
      // TODO throw WRONG PASSWORD
    }

    const refreshToken = generateRefreshToken(user.user_id, user.email);
    const accessToken = generateAccessToken(user.user_id, user.email);

    return new UserLoginData(
      true,
      user.user_id,
      user.username,
      user.register_date,
      user.image_url,
      refreshToken,
      accessToken
    );
  } catch (e) {
    console.log(e);
  }
}

// TODO handle if not valid
async function queryValidateUser(token: string) {
  try {
    const result = verifyToken(token) as { userId: number; email: string };
    const accessToken = generateAccessToken(result.userId, result.email);
    return accessToken;
  } catch (error) {
    console.log(error);
  }
}

// TODO handle if already exists
async function queryRegister(
  username: string,
  email: string,
  password: string
) {
  try {
    const { rows } = await client.query(REGISTER_USER, [
      username,
      email,
      password,
      getDate(),
    ]);

    const user: DUser = rows[0];

    const refreshToken = generateRefreshToken(user.user_id, user.email);
    const accessToken = generateAccessToken(user.user_id, user.email);

    return new UserLoginData(
      true,
      user.user_id,
      user.username,
      user.register_date,
      user.image_url,
      refreshToken,
      accessToken
    );
  } catch (error) {
    console.log(error);
  }
}

async function queryAddAnime(
  userId: string,
  animeId: string,
  category: string
) {
  try {
    await client.query(REMOVE_FROM_CATEGORIES, [userId, animeId]);
    const { rows } = await client.query(INSERT_INTO_CATEGORY, [
      userId,
      animeId,
      category,
    ]);

    if (rows.length > 0) return true;
  } catch (error) {
    console.log(error);
  }
}

async function queryRemoveAnime(userId: string, animeId: string) {
  try {
    client.query(REMOVE_FROM_CATEGORIES, [userId, animeId]);
    return true;
  } catch (e) {
    console.log(e);
  }
}

async function queryAnimeCount(userId: string) {
  try {
    const { rows } = await client.query(GET_ANIME_COUNT, [userId]);
    const animeCount: DAnimeCount[] = rows;
    const result = new AnimeCount(animeCount);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function queryAllUserAnime(userId: string) {
  try {
    const { rows } = await client.query(GET_ALL_ANIME_WITHOUT_USER, [userId]);

    const anime = rows.map((row: DAnime & DTags & DUserCategory) => {
      return new Anime(
        row.anime_id,
        row.title,
        row.type,
        row.episodes,
        row.status,
        row.year,
        row.image_url,
        row.values,
        row.category
      );
    });

    return anime;
  } catch (e) {
    console.log(e);
  }
}

async function queryUserAnime(userId: string, category: string) {
  try {
    const { rows } = await client.query(GET_ALL_ANIME_WITH_CATEGORY_USER, [
      userId,
      category,
    ]);

    const anime = rows.map((row: DAnime & DTags & DUserCategory) => {
      return new Anime(
        row.anime_id,
        row.title,
        row.type,
        row.episodes,
        row.status,
        row.year,
        row.image_url,
        row.values,
        row.category
      );
    });

    return anime;
  } catch (e) {
    console.log(e);
  }
}

async function queryUploadImage(userId: string, imageUrl: string) {
  try {
    const { rowCount } = await client.query(UPLOAD_IMAGE, [imageUrl, userId]);
    return rowCount === 1 ? true : false;
  } catch (e) {
    console.log(e);
  }
}

export {
  queryAllAnime,
  queryOneAnime,
  queryAllTags,
  queryLogin,
  queryValidateUser,
  queryRegister,
  queryAddAnime,
  queryAnimeCount,
  queryAllUserAnime,
  queryUserAnime,
  queryUploadImage,
  queryRemoveAnime,
};
