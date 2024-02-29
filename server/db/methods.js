import { ObjectId } from "mongodb";
import db from "./conn.js";

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

async function queryLogin(user) {
  let collection = await db.collection("animeCollection");
  let result = await collection.find({}).toArray();
  return result;
}

async function queryRegister(newUser) {
  let collection = await db.collection("animeCollection");
  let result = await collection.find({}).toArray();
  return result;
}

export {
  queryAllAnime,
  queryOneAnime,
  queryAllTags,
  queryLogin,
  queryRegister,
};
