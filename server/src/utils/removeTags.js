import { json } from "express";
import path from 'path'
import { readFileSync, writeFileSync } from "fs";

function removeTags() {
  const animeList = JSON.parse(
    readFileSync("anime-db.json", {
      path: path.resolve(__dirname),
    })
  );

  const tagList = JSON.parse(
    readFileSync("filtered-tags.json", {
      path: path.resolve(__dirname),
    })
  );

  let result = [];

  result = animeList.map((item) => {
    return item.tags.filter((tag) => {
      return tagList.includes(tag);
    });
  });

  animeList.map((item, index) => {
    item.tags = result[index].slice(0, 10);
  });

  writeFileSync("anime-db.json", JSON.stringify(animeList, null, 2));

  return animeList;
}

export default removeTags;
