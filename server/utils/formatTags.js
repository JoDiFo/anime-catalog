import { json } from "express";
import path from "path";
import { readFileSync, writeFileSync } from "fs";

function formatTags() {
  const DATA = JSON.parse(
    readFileSync("tags.json", {
      path: path.dirname("tags.json"),
    })
  );

  const result = DATA.data.map((item) => {
    const { id, ...value } = item;
    return value;
  });

  writeFileSync("test.json", JSON.stringify(result, null, 2));

  console.log("Ok");
}

export default formatTags;
