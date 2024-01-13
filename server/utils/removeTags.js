const { json } = require("express");
const fs = require("fs");

function removeTags() {
  const animeList = JSON.parse(
    fs.readFileSync("anime-db.json", {
      path: __dirname,
    })
  );

  const tagList = JSON.parse(
    fs.readFileSync("filtered-tags.json", {
      path: __dirname,
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

  fs.writeFileSync("anime-db.json", JSON.stringify(animeList, null, 2));

  return animeList;
}

module.exports = removeTags;
