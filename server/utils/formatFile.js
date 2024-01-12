const { json } = require("express");
const fs = require("fs");

function formatFile() {
  const DATA = JSON.parse(
    fs.readFileSync("anime-db.json", {
      path: __dirname,
    })
  );

  //    const result = DATA.data.filter((item) => {
  //     return item.type !== "SPECIAL" && item.type !== "OVA" && item.type !== "ONA";
  //   })
  // const result = DATA.map((item) => {
  //     const { sources, thumbnail, relations, ...res} = item;
  //     return res;
  // })
  const result = DATA.map((item) => {
    const id = item["_id"]["$oid"];
    const { _id, ...res } = item;
    return { id, ...res };
  });

  fs.writeFileSync("anime-db.json", JSON.stringify(result, null, 2));

  console.log("Ok");
}

module.exports = formatFile;
