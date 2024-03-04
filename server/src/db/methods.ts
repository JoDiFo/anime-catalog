import { ObjectId } from "mongodb";
import db from "./conn.js";
import getDate from "../utils/getDate.js";
import { IUserData } from "../types.js";

async function queryAllAnime() {
  try {
    let collection = await db?.collection("animeCollection");
    let result = await collection?.find({}).toArray();
    return result;
  } catch (e) {
    console.log(e);
  }
}

async function queryOneAnime(id: string) {
  try {
    let collection = await db?.collection("animeCollection");
    let result = await collection?.findOne({ _id: new ObjectId(id) });
    return result;
  } catch (e) {
    console.log(e);
  }
}

async function queryAllTags() {
  try {
    let collection = await db?.collection("tagsCollection");
    let result = await collection?.find({}).toArray();
    return result;
  } catch (e) {
    console.log(e);
  }
}

async function queryLogin(email: string, password: string) {
  try {
    let collection = await db?.collection("usersCollection");
    let result = await collection?.findOne({ email, password });
    return result;
  } catch (e) {
    console.log(e);
  }
}

async function queryFindUser(userId: string) {
  try {
    let collection = await db?.collection("usersCollection");
    let user = await collection?.findOne({ _id: new ObjectId(userId) });
    return user;
  } catch (error) {
    console.log(error);
  }
}

async function queryRegister(user: IUserData) {
  try {
    const newUserData = { ...user };
    newUserData.registerDate = getDate();
    let collection = await db?.collection("usersCollection");
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

export {
  queryAllAnime,
  queryOneAnime,
  queryAllTags,
  queryLogin,
  queryFindUser,
  queryRegister,
  queryUpdateUser,
  queryAddAnime,
  queryAnimeCount,
};
