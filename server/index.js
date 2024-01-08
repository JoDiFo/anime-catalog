const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const fs = require("fs");

const PORT = 8000;
const DATA = JSON.parse(
  fs.readFileSync("anime-offline-database.json", {
    path: __dirname,
  })
);

const root = {
  getAllAnime: () => {
    return DATA.data;
  },

  getAnime: ({ id }) => {
    return DATA.data[0];
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

app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}`)
);
