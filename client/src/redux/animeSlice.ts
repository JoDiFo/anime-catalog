import { createSlice } from "@reduxjs/toolkit";

export type Anime = {
  id: string;
  title: string;
  type: string;
  episodes: number;
  status: string;
  animeSeason: AnimeSeason;
  picture: string;
  synonyms: string[];
  tags: string[];
};

type AnimeSeason = {
  season: string;
  year: number;
};

interface AnimeSlice {
  value: Anime[];
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
