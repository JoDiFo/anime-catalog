import { createSlice } from "@reduxjs/toolkit";

interface AnimeSlice {
  value: IAnime[];
}

const initialState: AnimeSlice = {
  value: [],
};

export const animeSlice = createSlice({
  name: "animeSlice",
  initialState,
  reducers: {
    setAnime: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAnime } = animeSlice.actions;
export default animeSlice.reducer;
