import { ObjectId } from "mongodb";
import db from "./conn.js";
import getDate from "../utils/getDate.js";

async function queryAllAnime() {
  let collection = await db.collection("animeCollection");
  let result = await collection.find({}).toArray();
  return result;
}

async function queryOneAnime(id) {
  let collection = await db.collection("animeCollection");
  let result = await collection.findOne({ _id: new ObjectId(id) });
  return result;
}

async function queryAllTags() {
  let collection = await db.collection("tagsCollection");
  let result = await collection.find({}).toArray();
  return result;
}

async function queryLogin(email, password) {
  let collection = await db.collection("usersCollection");
  let result = await collection.findOne({ email, password });
  return result;
}

async function queryFindUser(userId) {
  let collection = await db.collection("usersCollection");
  let user = await collection.findOne({ _id: new ObjectId(userId) });
  return user;
}

async function queryRegister(user) {
  const registerDate = getDate();
  const data = {...user, registerDate}
  let collection = await db.collection("usersCollection");
  let insertResult = await collection.insertOne(data);
  let newUser = await collection.findOne({ _id: insertResult.insertedId });
  return newUser;
}

async function queryUpdateUser(userId, userData) {
  let collection = await db.collection("usersCollection");
  let result = await collection.updateOne(
    { _id: new ObjectId(userId) },
    { $set: userData }
  );
  let updatedUser = await collection.findOne({ _id: new ObjectId(userId) });
  return updatedUser;
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
