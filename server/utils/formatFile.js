import { json } from "express";
import path from 'path'
import { readFileSync, writeFileSync } from "fs";

function formatFile() {
  const DATA = JSON.parse(
    readFileSync("anime-db.json", {
      path: path.resolve(__dirname),
    })
  );

  const result = DATA.data.map((item) => {
    const { id, ...res } = item;
    return res;
  });
  // const result = DATA.map((item) => {
  //   const id = item["_id"]["$oid"];
  //   const { _id, ...res } = item;
  //   return { id, ...res };
  // });

  writeFileSync("test.json", JSON.stringify(result, null, 2));

  console.log("Ok");
}

export default formatFile;
