import express from "express";
import cors from "cors";
// import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema.js";
import { readFileSync } from "fs";

import formatFile from "./utils/formatFile.js";
import getTags from "./utils/getTags.js";
import formatTags from "./utils/formatTags.js";
import filterAnime from "./utils/filterAnime.js";
import removeTags from "./utils/removeTags.js";
import path from "path";

import { queryAllAnime, queryOneAnime } from "./db/methods.js";

const PORT = 8000;

const animeList = JSON.parse(
  readFileSync("anime-db.json", {
    path: path.dirname("anime-db.json"),
  })
);

const tagsList = JSON.parse(
  readFileSync("tags.json", {
    path: path.dirname("tags.json"),
  })
);

/** operations for manipulating user data
 * Login user
 * Register user
 * Logout user
 * Get user watch list
 * Update user watch list
 */

const root = {
  getAllAnime: () => {
    return animeList.data;
  },

  getAnime: ({ id }) => {
    return animeList.data.find((item) => item.id == id);
  },

  getAllTags: () => {
    return tagsList.data;
  },
};

const app = express();
app.use(cors());

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     graphiql: true,
//     schema,
//     rootValue: root,
//   })
// );

// Formatting and testing

app.get("/api/format", (req, res) => {
  formatFile();
  res.send("OK");
});

app.get("/api/tags", (req, res) => {
  // const result = getTags();
  const result = formatTags();
  res.send(result);
});

app.get("/api/filter", (req, res) => {
  const result = filterAnime();
  res.send(result);
});

app.get("/api/remove", (req, res) => {
  const result = removeTags();
  res.send(result);
});

app.get("/api/get-anime", async (req, res) => {
  const result = await queryAllAnime();
  res.send(result);
});

app.get("/api/get-one-anime", async (req, res) => {
  const result = await queryOneAnime("65e06ae2b1254f4cbab3ff80");
  res.send(result);
});

app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}`)
);
