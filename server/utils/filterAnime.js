import { json } from "express";
import path from 'path'
import { readFileSync, writeFileSync } from "fs";

function filterAnime() {
  const animeList = JSON.parse(
    readFileSync("anime-db.json", {
      path: path.resolve(__dirname),
    })
  );

  let result = {
    data: [],
  };
  const tags = [
    "korean animation",
    "frogs",
    "cg animation",
    "cg-anime",
    "full cgi",
    "cgi",
    "lgbtq+ themes",
    "eroticism",
    "nudity",
    "transgender",
    "erotic game",
    "hentai",
    "birds",
    "incest",
    "gender bender",
    "disney",
    "masturbation",
    "marvel comics",
    "bondage",
    "television programme",
    "bdsm",
    "cunnilingus",
    "sex toys",
    "chibi style",
    "handjob",
    "scissoring",
    "ero guro",
    "group sex",
    "shorts",
  ];

  // const result = DATA.filter((item) => {
  //   return item.tags.length !== 0;
  // });

  tags.map((tag) => {
    result.data = animeList.data.filter((item) => {
      return !item.tags.includes(tag);
    });
  });

  writeFileSync("anime-db.json", JSON.stringify(result, null, 2));

  return result;
}

export default filterAnime;
