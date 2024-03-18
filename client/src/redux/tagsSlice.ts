import { createSlice } from "@reduxjs/toolkit";

interface ITagsSlice {
  selected: ETag[];
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
