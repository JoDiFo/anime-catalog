import express from "express";
import cors from "cors";

import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema.js";
import { root } from "./graphql/root.js";

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

app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}`)
);
