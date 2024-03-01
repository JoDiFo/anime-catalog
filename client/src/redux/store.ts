import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./tagsSlice";
import animeReducer from "./animeSlice";
import userReducer from './userSlice'

export const store = configureStore({
  reducer: { tags: tagsReducer, anime: animeReducer, userReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
