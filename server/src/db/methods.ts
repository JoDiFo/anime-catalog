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

export {
  queryAllAnime,
  queryOneAnime,
  queryAllTags,
  queryLogin,
  queryFindUser,
  queryRegister,
  queryUpdateUser,
};
