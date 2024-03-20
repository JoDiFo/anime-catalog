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
  queryUserDropped,
  queryUserPlanning,
  queryUserStalled,
  queryUserWatched,
  queryUserWatching,
  queryUploadImage,
  queryRemoveAnime,
} from "../db/methods.js";

export const root = {
  getAllAnime: async ({
    userId,
    searchString,
    tags,
  }: {
    userId: string;
    searchString: string;
    tags: string[];
  }) => {
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

  getUserAnime: async ({ userId }: { userId: string }) => {
    return await queryUserAnime(userId);
  },

  getUserWatched: async ({ userId }: { userId: string }) => {
    return await queryUserWatched(userId);
  },

  getUserWatching: async ({ userId }: { userId: string }) => {
    return await queryUserWatching(userId);
  },

  getUserPlanning: async ({ userId }: { userId: string }) => {
    return await queryUserPlanning(userId);
  },

  getUserStalled: async ({ userId }: { userId: string }) => {
    return await queryUserStalled(userId);
  },

  getUserDropped: async ({ userId }: { userId: string }) => {
    return await queryUserDropped(userId);
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
