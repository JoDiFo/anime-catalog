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
  queryUploadImage,
  queryRemoveAnime,
} from "../db/methods.js";

import { LoginData, RegisterData } from "../types.js";

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

interface IUploadImage {
  userId: string;
  imageUrl: string;
}

export const root = {
  getAllAnime: async ({ userId, searchString, tags }: IGetAllAnime) => {
    return await queryAllAnime(userId, searchString, tags);
  },

  getOneAnime: async ({
    animeId,
    userId,
  }: {
    animeId: number;
    userId: number;
  }) => {
    return await queryOneAnime(animeId, userId);
  },

  getAllTags: async () => {
    return await queryAllTags();
  },

  validateUser: async ({ token }: IVerify) => {
    return await queryValidateUser(token);
  },

  createUser: async ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) => {
    return await queryRegister(username, email, password);
  },

  updateUser: async ({ id, input }: { id: string } & RegisterData) => {
    return await queryUpdateUser(id, input);
  },

  loginUser: async ({ email, password }: LoginData) => {
    return await queryLogin(email, password);
  },

  addAnime: async ({ userId, animeId, category }: IAddAnime) => {
    return await queryAddAnime(userId, animeId, category);
  },

  removeAnime: async ({ userId, animeId }: IAddAnime) => {
    return await queryRemoveAnime(userId, animeId);
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

  uploadImage: async ({ userId, imageUrl }: IUploadImage) => {
    return await queryUploadImage(userId, imageUrl);
  },
};
