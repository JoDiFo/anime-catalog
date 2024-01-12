const { json } = require("express");
const fs = require("fs");

function getTags() {
  const DATA = JSON.parse(
    fs.readFileSync("anime-db.json", {
      path: __dirname,
    })
  );

  const tags = new Set();
  DATA.map((item) => {
    item.tags.map((tag) => tags.add(tag));
  });

  const result = [...tags]

  fs.writeFileSync("tags.json", JSON.stringify(result, null, 2));

  return result;
}

module.exports = getTags;
