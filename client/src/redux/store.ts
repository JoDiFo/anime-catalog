import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./tagsSlice";
import animeReducer from "./animeSlice";

export const store = configureStore({
  reducer: { tags: tagsReducer, anime: animeReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
