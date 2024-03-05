import { ObjectId } from "mongodb";
import db from "./conn.js";
import getDate from "../utils/getDate.js";
import { IAnime, IUser, IUserData, IValidation } from "../types.js";
import generateToken from "../utils/generateToken.js";

async function queryAllAnime(userId: string) {
  try {
    let collection = await db?.collection("animeCollection");
    let result = await collection?.find({}).toArray();

    if (userId) {
      let usersCollection = await db?.collection("usersCollection");
      let user = await usersCollection?.findOne({ _id: new ObjectId(userId) });
      result?.forEach((item) => {
        if (user?.watched.includes(item._id.toString()))
          item.watchStatus = "watched";
        if (user?.watching.includes(item._id.toString()))
          item.watchStatus = "watching";
        if (user?.["plan-to-watch"].includes(item._id.toString()))
          item.watchStatus = "plan-to-watch";
        if (user?.stalled.includes(item._id.toString()))
          item.watchStatus = "stalled";
        if (user?.dropped.includes(item._id.toString()))
          item.watchStatus = "dropped";
      });
    }
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
    const token = generateToken();
    let updatedUser = await collection?.updateOne(
      { _id: new ObjectId(result?._id) },
      { $set: { token } }
    );
    if (result) {
      result.token = token;
    }
    return result;
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
      };
      return response;
    } else {
      const response: IValidation = {
        isValid: false,
        _userId: "",
        username: "",
        registerDate: "",
      };
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

async function queryRegister(user: IUserData) {
  try {
    const newUserData = { ...user };
    newUserData.registerDate = getDate();
    newUserData.watched = [];
    newUserData.watching = [];
    newUserData["plan-to-watch"] = [];
    newUserData.stalled = [];
    newUserData.dropped = [];
    newUserData.token = generateToken();
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

async function queryUserWatched(userId: string) {
  if (!db) {
    return;
  }

  try {
    let usersCollection = await db.collection("usersCollection");
    let animeCollection = await db.collection("animeCollection");
    let user = await usersCollection.findOne({ _id: new ObjectId(userId) });
    const result = user?.watched.map((item: string) => {
      return animeCollection.findOne({ _id: new ObjectId(item) });
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
    const result = user?.watching.map((item: string) => {
      return animeCollection.findOne({ _id: new ObjectId(item) });
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
    const result = user?.["plan-to-watch"].map((item: string) => {
      return animeCollection.findOne({ _id: new ObjectId(item) });
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
    const result = user?.stalled.map((item: string) => {
      return animeCollection.findOne({ _id: new ObjectId(item) });
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
    const result = user?.dropped.map((item: string) => {
      return animeCollection.findOne({ _id: new ObjectId(item) });
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
    ...(await queryUserDropped(userId)),
    ...(await queryUserStalled(userId)),
  ];
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
};
