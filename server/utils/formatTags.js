const { json } = require("express");
const fs = require("fs");

function formatTags() {
  const DATA = JSON.parse(
    fs.readFileSync("tags.json", {
      path: __dirname,
    })
  );

  const result = DATA.data.map((item, index) => {
    return { id: index, value: item };
  });

  fs.writeFileSync("tags.json", JSON.stringify({data: result}, null, 2));

  console.log("Ok");
}

module.exports = formatTags;
