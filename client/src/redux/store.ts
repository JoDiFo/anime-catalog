import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./tagsSlice";

export const store = configureStore({
  reducer: { tags: tagsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
