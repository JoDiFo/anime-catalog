const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const fs = require("fs");

const getTags = require("./utils/getTags")

const PORT = 8000;
const DATA = JSON.parse(
  fs.readFileSync("anime-db.json", {
    path: __dirname,
  })
);

const root = {
  getAllAnime: () => {
    return DATA;
  },

  getAnime: ({ id }) => {
    return DATA.find(item => item.id == id);
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

app.get("/format", (req, res) => {
  formatFile();
  res.send("OK");
});

app.get("/get-tags", (req, res) => {
  const result = getTags();
  res.send(result);
});

app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}`)
);
