const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const fs = require("fs");

const formatFile = require("./utils/formatFile");
const getTags = require("./utils/getTags");
const filterAnime = require("./utils/filterAnime");
const removeTags = require("./utils/removeTags");

const PORT = 8000;

const animeList = JSON.parse(
  fs.readFileSync("anime-db.json", {
    path: __dirname,
  })
);

const tagsList = JSON.parse(
  fs.readFileSync("tags.json", {
    path: __dirname,
  })
);

const root = {
  getAllAnime: () => {
    return animeList.data;
  },

  getAnime: ({ id }) => {
    return animeList.find((item) => item.id == id);
  },

  getAllTags: () => {
    return tagsList.data;
  },
};

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

app.get("/api/format", (req, res) => {
  formatFile();
  res.send("OK");
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

app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}`)
);
