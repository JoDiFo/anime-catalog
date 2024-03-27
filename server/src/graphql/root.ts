import {
  queryAddAnime,
  queryAllAnime,
  queryAllTags,
  queryAnimeCount,
  queryValidateUser,
  queryLogin,
  queryOneAnime,
  queryRegister,
  queryUserAnime,
  queryUploadImage,
  queryRemoveAnime,
  queryAllUserAnime,
} from "../db/methods.js";

export const root = {
  getAllAnime: async ({
    userId,
    searchString,
    tags,
    sortBy
  }: {
    userId: string;
    searchString: string;
    tags: string[];
    sortBy: string
  }) => {
    return await queryAllAnime(userId, searchString, tags, sortBy);
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

  validateUser: async ({ token }: { token: string }) => {
    return await queryValidateUser(token);
  },

  registerUser: async ({
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

  loginUser: async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    return await queryLogin(email, password);
  },

  addAnime: async ({
    userId,
    animeId,
    category,
  }: {
    userId: string;
    animeId: string;
    category: string;
  }) => {
    return await queryAddAnime(userId, animeId, category);
  },

  removeAnime: async ({
    userId,
    animeId,
  }: {
    userId: string;
    animeId: string;
  }) => {
    return await queryRemoveAnime(userId, animeId);
  },

  getAnimeCount: async ({ userId }: { userId: string }) => {
    return await queryAnimeCount(userId);
  },

  getAllUserAnime: async ({ userId }: { userId: string }) => {
    return await queryAllUserAnime(userId);
  },

  getUserAnime: async ({
    userId,
    category,
  }: {
    userId: string;
    category: string;
  }) => {
    return await queryUserAnime(userId, category);
  },

  uploadImage: async ({
    userId,
    imageUrl,
  }: {
    userId: string;
    imageUrl: string;
  }) => {
    return await queryUploadImage(userId, imageUrl);
  },
};
