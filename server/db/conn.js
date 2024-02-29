import { MongoClient } from "mongodb";
import { uri } from "./constants.js";

const client = new MongoClient(uri);
let connection;
try {
  connection = await client.connect();
} catch (e) {
  console.log(e);
}

let db = connection.db("Anime-Catalog-DB");

export default db;
