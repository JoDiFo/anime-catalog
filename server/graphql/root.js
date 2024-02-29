import {
  queryAllAnime,
  queryAllTags,
  queryFindUser,
  queryOneAnime,
  queryRegister,
  queryUpdateUser,
} from "../db/methods.js";

export const root = {
  getAllAnime: async () => {
    return await queryAllAnime();
  },

  getOneAnime: async ({ id }) => {
    return await queryOneAnime(id);
  },

  getAllTags: async () => {
    return await queryAllTags();
  },

  getUser: async ({ id }) => {
    return await queryFindUser(id);
  },

  createUser: async ({ input }) => {
    return await queryRegister(input);
  },

  updateUser: async ({ id, input }) => {
    return await queryUpdateUser(id, input);
  },
};
