import {
  queryAddAnime,
  queryAllAnime,
  queryAllTags,
  queryAnimeCount,
  queryFindUser,
  queryLogin,
  queryOneAnime,
  queryRegister,
  queryUpdateUser,
} from "../db/methods.js";

import { ID, LoginData, RegisterData } from "../types.js";

export interface IAddAnime {
  userId: string;
  animeId: string;
  category: string;
}

interface IGetAnimeCount {
  userId: string;
}

export const root = {
  getAllAnime: async () => {
    return await queryAllAnime();
  },

  getOneAnime: async ({ id }: ID) => {
    return await queryOneAnime(id);
  },

  getAllTags: async () => {
    return await queryAllTags();
  },

  getUser: async ({ id }: ID) => {
    return await queryFindUser(id);
  },

  createUser: async ({ input }: RegisterData) => {
    return await queryRegister(input);
  },

  updateUser: async ({ id, input }: ID & RegisterData) => {
    return await queryUpdateUser(id, input);
  },

  loginUser: async ({ email, password }: LoginData) => {
    return await queryLogin(email, password);
  },

  addAnime: async ({ userId, animeId, category }: IAddAnime) => {
    return await queryAddAnime(userId, animeId, category);
  },

  getAnimeCount: async ({ userId }: IGetAnimeCount) => {
    return await queryAnimeCount(userId);
  },
};
