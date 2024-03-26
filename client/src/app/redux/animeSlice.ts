import { createSlice } from "@reduxjs/toolkit";

interface IAnimeSlice {
  requestReload: boolean;
}

const initialState: IAnimeSlice = {
  requestReload: false,
};

export const animeSlice = createSlice({
  name: "animeSlice",
  initialState,
  reducers: {
    load: (state) => {
      state.requestReload = true;
    },

    notLoad: (state) => {
      state.requestReload = false;
    },
  },
});

export const { load, notLoad } = animeSlice.actions;
export default animeSlice.reducer;
