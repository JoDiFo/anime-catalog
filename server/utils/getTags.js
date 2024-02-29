import { json } from "express";
import path from 'path'
import { readFileSync, writeFileSync } from "fs";

function getTags() {
  const DATA = JSON.parse(
    readFileSync("anime-db.json", {
      path: path.resolve(__dirname),
    })
  );

  const tags = new Set();
  DATA.map((item) => {
    item.tags.map((tag) => tags.add(tag));
  });

  const result = [...tags]

  writeFileSync("tags.json", JSON.stringify(result, null, 2));

  return result;
}

export default getTags;
