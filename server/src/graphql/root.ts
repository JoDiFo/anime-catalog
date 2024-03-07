import {
  queryAddAnime,
  queryAllAnime,
  queryAllTags,
  queryAnimeCount,
  queryValidateUser,
  queryLogin,
  queryOneAnime,
  queryRegister,
  queryUpdateUser,
  queryUserAnime,
  queryUserDropped,
  queryUserPlanning,
  queryUserStalled,
  queryUserWatched,
  queryUserWatching,
} from "../db/methods.js";

import { ID, ITag, LoginData, RegisterData } from "../types.js";

interface IGetAllAnime {
  userId: string;
  searchString: string;
  tags: string[];
}

export interface IAddAnime {
  userId: string;
  animeId: string;
  category: string;
}

interface IGetAnimeCount {
  userId: string;
}

interface IUserId {
  userId: string;
}

interface IVerify {
  token: string;
}

interface IGetOneAnime {
  id: string;
  userId: string;
}

export const root = {
  getAllAnime: async ({ userId, searchString, tags }: IGetAllAnime) => {
    return await queryAllAnime(userId, searchString, tags);
  },

  getOneAnime: async ({ id, userId }: IGetOneAnime) => {
    return await queryOneAnime(id, userId);
  },

  getAllTags: async () => {
    return await queryAllTags();
  },

  validateUser: async ({ token }: IVerify) => {
    return await queryValidateUser(token);
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

  getUserAnime: async ({ userId }: IUserId) => {
    return await queryUserAnime(userId);
  },

  getUserWatched: async ({ userId }: IUserId) => {
    return await queryUserWatched(userId);
  },

  getUserWatching: async ({ userId }: IUserId) => {
    return await queryUserWatching(userId);
  },

  getUserPlanning: async ({ userId }: IUserId) => {
    return await queryUserPlanning(userId);
  },

  getUserStalled: async ({ userId }: IUserId) => {
    return await queryUserStalled(userId);
  },

  getUserDropped: async ({ userId }: IUserId) => {
    return await queryUserDropped(userId);
  },
};
