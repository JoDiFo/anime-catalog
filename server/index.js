import express from "express";
import cors from "cors";

import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema.js";
import { root } from "./graphql/root.js";

import formatFile from "./utils/formatFile.js";
import getTags from "./utils/getTags.js";
import formatTags from "./utils/formatTags.js";
import filterAnime from "./utils/filterAnime.js";
import removeTags from "./utils/removeTags.js";

import { queryAllAnime, queryOneAnime } from "./db/methods.js";

const PORT = 8000;

const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

// Formatting and testing

app.get("/api/format", (req, res) => {
  formatFile();
  res.send("OK");
});

app.get("/api/format-tags", (req, res) => {
  const result = formatTags();
  res.send(result);
});

app.get("/api/tags", (req, res) => {
  const result = getTags();
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
