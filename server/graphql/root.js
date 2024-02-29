import { queryAllAnime, queryAllTags, queryOneAnime } from "../db/methods.js";

export const root = {
  getAllAnime: async () => {
    return await queryAllAnime();
  },

  getAnime: async ({ id }) => {
    return await queryOneAnime(id);
  },

  getAllTags: async () => {
    return await queryAllTags();
  },
};
