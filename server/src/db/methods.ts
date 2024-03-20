import getDate from "../utils/getDate.js";
import generateToken from "../utils/generateToken.js";

import { client } from "./postgresConn.js";
import { UserLoginData } from "../models/User.js";
import { Tag } from "../models/Tag.js";
import { Anime, AnimeCount } from "../models/Anime.js";
import {
  FIND_USER_BY_EMAIL,
  GET_ALL_ANIME,
  GET_ALL_ANIME_WITHOUT_USER,
  GET_ALL_ANIME_WITH_CATEGORY_USER,
  GET_ALL_TAGS,
  GET_ANIME_COUNT,
  GET_ANIME_WATCH_STATUS,
  GET_ONE_ANIME_WITHOUT_USER_ID,
  INSERT_INTO_CATEGORY,
  REGISTER_USER,
  REMOVE_FROM_CATEGORIES,
  UPDATE_USER_TOKEN,
  UPLOAD_IMAGE,
  VALIDATE_USER_TOKEN,
} from "./queries.js";

// TODO rewrite this function using query with join using anime_id
async function queryAllAnime(
  userId: string,
  searchString: string,
  tags: string[]
) {
  try {
    const { rows } = await client.query(GET_ALL_ANIME, [
      searchString ?? "" + "%",
    ]);

    const animes: EAnime[] = await Promise.all(
      rows
        .filter((row: DAnime & DTags) =>
          row.names.some((value) => tags.includes(value))
        )
        .map(async (row: DAnime & DTags) => {
          let watch_status = "not-watched";

          if (userId) {
            const { rows: watchStatus } = await client.query(
              GET_ANIME_WATCH_STATUS,
              [row.anime_id, userId]
            );

            if (watchStatus.length > 0) {
              watch_status = watchStatus[0].category;
            }
          }

          return new Anime(
            row.anime_id,
            row.title,
            row.type,
            row.episodes,
            row.status,
            row.year,
            row.image_url,
            row.names,
            watch_status
          );
        })
    );

    return animes;
  } catch (e) {
    console.log(e);
  }
}

async function queryOneAnime(animeId: number, userId: number) {
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

    const tags = animeData.map((row: DTag) => row.name);
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

    const tags: ETag[] = rows.map((row: DTag) => new Tag(row.tag_id, row.name));
    return tags;
  } catch (e) {
    console.log(e);
  }
}

// TODO add return if not valid
async function queryLogin(email: string, password: string) {
  try {
    const { rows } = await client.query(FIND_USER_BY_EMAIL, [email]);
    const user: DUser = rows[0];

    if (user.password === password) {
      const token = generateToken();
      user.token = token;
      updateUserToken(user.user_id, token);
      return new UserLoginData(
        true,
        user.user_id,
        user.username,
        user.register_date,
        user.image_url,
        user.token
      );
    }
  } catch (e) {
    console.log(e);
  }
}

async function updateUserToken(userId: number, newToken: string) {
  try {
    await client.query(UPDATE_USER_TOKEN, [newToken, userId]);
  } catch (e) {
    console.log(e);
  }
}

// TODO handle if not valid
async function queryValidateUser(token: string) {
  try {
    const { rows } = await client.query(VALIDATE_USER_TOKEN, [token]);
    const userData: EUserLoginData = rows[0];
    return new UserLoginData(
      true,
      userData.id,
      userData.username,
      userData.registerDate,
      userData.image_url,
      userData.token
    );
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
      generateToken(),
    ]);

    const userData: DUser = rows[0];
    return new UserLoginData(
      true,
      userData.user_id,
      userData.username,
      userData.register_date,
      userData.image_url,
      userData.token
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

async function queryUserWatched(userId: string) {
  try {
    const { rows } = await client.query(GET_ALL_ANIME_WITH_CATEGORY_USER, [
      userId,
      "watched",
    ]);

    const animes = rows.map((row: DAnime & DTags & DUserCategory) => {
      return new Anime(
        row.anime_id,
        row.title,
        row.type,
        row.episodes,
        row.status,
        row.year,
        row.image_url,
        row.names,
        row.category
      );
    });

    return animes;
  } catch (error) {
    console.log(error);
  }
}

async function queryUserWatching(userId: string) {
  try {
    const { rows } = await client.query(GET_ALL_ANIME_WITH_CATEGORY_USER, [
      userId,
      "watching",
    ]);

    const animes = rows.map((row: DAnime & DTags & DUserCategory) => {
      return new Anime(
        row.anime_id,
        row.title,
        row.type,
        row.episodes,
        row.status,
        row.year,
        row.image_url,
        row.names,
        row.category
      );
    });

    return animes;
  } catch (error) {
    console.log(error);
  }
}

async function queryUserPlanning(userId: string) {
  try {
    const { rows } = await client.query(GET_ALL_ANIME_WITH_CATEGORY_USER, [
      userId,
      "plan_to_watch",
    ]);

    const animes = rows.map((row: DAnime & DTags & DUserCategory) => {
      return new Anime(
        row.anime_id,
        row.title,
        row.type,
        row.episodes,
        row.status,
        row.year,
        row.image_url,
        row.names,
        row.category
      );
    });

    return animes;
  } catch (error) {
    console.log(error);
  }
}

async function queryUserStalled(userId: string) {
  try {
    const { rows } = await client.query(GET_ALL_ANIME_WITH_CATEGORY_USER, [
      userId,
      "stalled",
    ]);

    const animes = rows.map((row: DAnime & DTags & DUserCategory) => {
      return new Anime(
        row.anime_id,
        row.title,
        row.type,
        row.episodes,
        row.status,
        row.year,
        row.image_url,
        row.names,
        row.category
      );
    });

    return animes;
  } catch (error) {
    console.log(error);
  }
}

async function queryUserDropped(userId: string) {
  try {
    const { rows } = await client.query(GET_ALL_ANIME_WITH_CATEGORY_USER, [
      userId,
      "dropped",
    ]);

    const animes = rows.map((row: DAnime & DTags & DUserCategory) => {
      return new Anime(
        row.anime_id,
        row.title,
        row.type,
        row.episodes,
        row.status,
        row.year,
        row.image_url,
        row.names,
        row.category
      );
    });

    return animes;
  } catch (error) {
    console.log(error);
  }
}

async function queryUserAnime(userId: string) {
  try {
    const { rows } = await client.query(GET_ALL_ANIME_WITHOUT_USER, [userId]);

    const animes = rows.map((row: DAnime & DTags & DUserCategory) => {
      return new Anime(
        row.anime_id,
        row.title,
        row.type,
        row.episodes,
        row.status,
        row.year,
        row.image_url,
        row.names,
        row.category
      );
    });

    return animes;
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
  queryUserAnime,
  queryUserWatched,
  queryUserWatching,
  queryUserDropped,
  queryUserStalled,
  queryUserPlanning,
  queryUploadImage,
  queryRemoveAnime,
};
