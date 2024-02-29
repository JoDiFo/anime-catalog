import path from "path";
import { readFileSync } from "fs";

const animeList = JSON.parse(
  readFileSync("anime-db.json", {
    path: path.dirname("anime-db.json"),
  })
);

const tagsList = JSON.parse(
  readFileSync("tags.json", {
    path: path.dirname("tags.json"),
  })
);

export const root = {
  getAllAnime: () => {
    return animeList.data;
  },

  getAnime: ({ id }) => {
    return animeList.data.find((item) => item.id == id);
  },

  getAllTags: () => {
    return tagsList.data;
  },
};
