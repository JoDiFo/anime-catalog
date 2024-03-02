import {
  queryAllAnime,
  queryAllTags,
  queryFindUser,
  queryLogin,
  queryOneAnime,
  queryRegister,
  queryUpdateUser,
} from "../db/methods.js";
import { ID, LoginData, RegisterData } from "../types.js";

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
};
