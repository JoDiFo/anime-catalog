const { json } = require("express");
const fs = require("fs");

function formatFile() {
  const DATA = JSON.parse(
    fs.readFileSync("database.json", {
      path: __dirname,
    })
  );

//    const result = DATA.data.filter((item) => {
//     return item.type !== "SPECIAL" && item.type !== "OVA" && item.type !== "ONA";
//   })
    const result = DATA.map((item) => {
        const { sources, thumbnail, relations, ...res} = item;
        return res;
    })

  fs.writeFileSync("database.json", JSON.stringify(result, null, 2))

  console.log("Ok");
}

module.exports = formatFile;
