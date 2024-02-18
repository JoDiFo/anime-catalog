import { createSlice } from "@reduxjs/toolkit";

const initialState: IAnimeList = {
  items: [],
};

export const animeSlice = createSlice({
  name: "animeSlice",
  initialState,
  reducers: {
    setAnime: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setAnime } = animeSlice.actions;
export default animeSlice.reducer;
