import { createSlice } from "@reduxjs/toolkit";
import { ITag } from "../types";

interface ITagsSlice {
  selected: ITag[];
}

const initialState: ITagsSlice = {
  selected: [],
};

export const tagsSlice = createSlice({
  name: "tagsSlice",
  initialState,
  reducers: {
    setSelectedTags: (state, action) => {
      state.selected = action.payload;
    },

    clearSelected: (state) => {
      state.selected = [];
    },
  },
});

export const { setSelectedTags, clearSelected } = tagsSlice.actions;
export default tagsSlice.reducer;
