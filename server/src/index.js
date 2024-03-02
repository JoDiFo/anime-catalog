import express from "express";
import cors from "cors";

import { createHandler } from "graphql-http/lib/use/express";
import { schema } from "./graphql/schema.js";
import { root } from "./graphql/root.js";
import { ruruHTML } from "ruru/server";

const PORT = 8000;

const app = express();
app.use(cors());

app.all(
  "/graphql",
  createHandler({
    schema,
    rootValue: root,
  })
);

app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.listen(PORT, () =>
  console.log(`Listening on port http://localhost:${PORT}`)
);
