import { ObjectId } from "mongodb";
import db from "./mongodbConn.js";
import getDate from "../utils/getDate.js";
import { IUserData, IValidation } from "../types.js";
import generateToken from "../utils/generateToken.js";

import { client } from "./postgresConn.js";
import { Anime } from "../models/Anime.js";
import {
  FIND_USER_BY_EMAIL,
  GET_ALL_ANIME,
  GET_ALL_TAGS,
  GET_ANIME_WATCH_STATUS,
  GET_ONE_ANIME_WITHOUT_USER_ID,
  UPDATE_USER_TOKEN,
} from "./queries.js";
import { Tag } from "../models/Tag.js";
import { User, UserLoginData } from "../models/User.js";

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

async function queryValidateUser(token: string) {
  try {
    let collection = await db?.collection("usersCollection");
    let user = await collection?.findOne({ token });
    if (user) {
      const response: IValidation = {
        isValid: true,
        _userId: user._id.toString(),
        username: user.username,
        registerDate: user.registerDate,
        imageUrl: user.imageUrl,
      };
      return response;
    } else {
      const response: IValidation = {
        isValid: false,
        _userId: "",
        username: "",
        registerDate: "",
        imageUrl: "",
      };
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

interface IRegisterData {
  username: string;
  email: string;
  password: string;
}

async function queryRegister(user: IRegisterData) {
  try {
    let collection = await db?.collection("usersCollection");
    const found = await collection?.findOne({ email: user.email });
    if (found) {
      return null;
    }

    const newUserData: IUserData = {
      ...user,
      registerDate: getDate(),
      watched: [],
      watching: [],
      ["plan-to-watch"]: [],
      stalled: [],
      dropped: [],
      token: generateToken(),
    };

    let insertResult = await collection?.insertOne(newUserData);
    let newUser = await collection?.findOne({ _id: insertResult?.insertedId });
    return newUser;
  } catch (error) {
    console.log(error);
  }
}

async function queryUpdateUser(userId: string, userData: IUserData) {
  try {
    let collection = await db?.collection("usersCollection");
    let result = await collection?.updateOne(
      { _id: new ObjectId(userId) },
      { $set: userData }
    );
    let updatedUser = await collection?.findOne({ _id: new ObjectId(userId) });
    return updatedUser;
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
    let animeCollection = await db?.collection("animeCollection");
    let anime = await animeCollection?.findOne({ _id: new ObjectId(animeId) });
    if (anime) {
      anime.watchStatus = category;
    }

    let usersCollection = await db?.collection("usersCollection");
    let found = await usersCollection
      ?.find({
        _id: new ObjectId(userId),
        [category]: { $in: [animeId] },
      })
      .toArray();
    if (found?.length !== 0) {
      return anime;
    }

    const categories = [
      "dropped",
      "stalled",
      "watched",
      "watching",
      "plan-to-watch",
    ];
    const pullObject: any = {};
    categories.forEach((item) => {
      if (item !== category) {
        pullObject[item] = animeId;
      }
    });

    let result = await usersCollection?.updateOne(
      { _id: new ObjectId(userId) },
      {
        $pull: pullObject,
        $push: { [category]: animeId },
      }
    );

    return anime;
  } catch (error) {
    console.log(error);
  }
}

async function queryRemoveAnime(userId: string, animeId: string) {
  let usersCollection = await db?.collection("usersCollection");

  const categories = [
    "dropped",
    "stalled",
    "watched",
    "watching",
    "plan-to-watch",
  ];
  const pullObject: any = {};
  categories.forEach((item) => {
    pullObject[item] = animeId;
  });

  let result = await usersCollection?.updateOne(
    { _id: new ObjectId(userId) },
    {
      $pull: pullObject,
    }
  );

  return result?.acknowledged;
}

async function queryAnimeCount(userId: string) {
  try {
    let usersCollection = await db?.collection("usersCollection");
    let user = await usersCollection?.findOne({ _id: new ObjectId(userId) });
    return {
      watched: user?.watched.length,
      watching: user?.watching.length,
      planToWatch: user?.["plan-to-watch"].length,
      stalled: user?.stalled.length,
      dropped: user?.dropped.length,
    };
  } catch (error) {
    console.log(error);
  }
}

async function queryUserWatched(userId: string) {
  if (!db) {
    return;
  }

  try {
    let usersCollection = await db.collection("usersCollection");
    let animeCollection = await db.collection("animeCollection");
    let user = await usersCollection.findOne({ _id: new ObjectId(userId) });
    const result = user?.watched.map(async (item: string) => {
      const anime = await animeCollection.findOne({ _id: new ObjectId(item) });
      if (anime) anime.watchStatus = "watched";

      return anime;
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

async function queryUserWatching(userId: string) {
  if (!db) {
    return;
  }

  try {
    let usersCollection = await db.collection("usersCollection");
    let animeCollection = await db.collection("animeCollection");
    let user = await usersCollection.findOne({ _id: new ObjectId(userId) });
    const result = user?.watching.map(async (item: string) => {
      const anime = await animeCollection.findOne({ _id: new ObjectId(item) });
      if (anime) anime.watchStatus = "watching";

      return anime;
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

async function queryUserPlanning(userId: string) {
  if (!db) {
    return;
  }

  try {
    let usersCollection = await db.collection("usersCollection");
    let animeCollection = await db.collection("animeCollection");
    let user = await usersCollection.findOne({ _id: new ObjectId(userId) });
    const result = user?.["plan-to-watch"].map(async (item: string) => {
      const anime = await animeCollection.findOne({ _id: new ObjectId(item) });
      if (anime) anime.watchStatus = "plan-to-watch";

      return anime;
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

async function queryUserStalled(userId: string) {
  if (!db) {
    return;
  }

  try {
    let usersCollection = await db.collection("usersCollection");
    let animeCollection = await db.collection("animeCollection");
    let user = await usersCollection.findOne({ _id: new ObjectId(userId) });
    const result = user?.stalled.map(async (item: string) => {
      const anime = await animeCollection.findOne({ _id: new ObjectId(item) });
      if (anime) anime.watchStatus = "stalled";

      return anime;
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

async function queryUserDropped(userId: string) {
  if (!db) {
    return;
  }

  try {
    let usersCollection = await db.collection("usersCollection");
    let animeCollection = await db.collection("animeCollection");
    let user = await usersCollection.findOne({ _id: new ObjectId(userId) });
    const result = user?.dropped.map(async (item: string) => {
      const anime = await animeCollection.findOne({ _id: new ObjectId(item) });
      if (anime) anime.watchStatus = "dropped";

      return anime;
    });

    return result;
  } catch (error) {
    console.log(error);
  }
}

async function queryUserAnime(userId: string) {
  return [
    ...(await queryUserWatched(userId)),
    ...(await queryUserWatching(userId)),
    ...(await queryUserPlanning(userId)),
    ...(await queryUserStalled(userId)),
    ...(await queryUserDropped(userId)),
  ];
}

async function queryUploadImage(userId: string, imageUrl: string) {
  const usersCollection = await db?.collection("usersCollection");
  const result = await usersCollection?.updateOne(
    { _id: new ObjectId(userId) },
    { $set: { imageUrl } }
  );

  return result && result.modifiedCount > 0;
}

export {
  queryAllAnime,
  queryOneAnime,
  queryAllTags,
  queryLogin,
  queryValidateUser,
  queryRegister,
  queryUpdateUser,
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
