import { json } from "express";
import path from 'path'
import { readFileSync, writeFileSync } from "fs";

function formatTags() {
  const DATA = JSON.parse(
    readFileSync("tags.json", {
      path: path.resolve(__dirname),
    })
  );

  const result = DATA.data.map((item, index) => {
    return { id: index, value: item };
  });

  writeFileSync("tags.json", JSON.stringify({data: result}, null, 2));

  console.log("Ok");
}

export default formatTags;
