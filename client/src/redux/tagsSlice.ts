import { createSlice } from "@reduxjs/toolkit";

interface ITagsSlice {
  all: ITag[];
  selected: ITag[];
}

const initialState: ITagsSlice = {
  all: [],
  selected: [],
};

export const tagsSlice = createSlice({
  name: "tagsSlice",
  initialState,
  reducers: {
    setTags: (state, action) => {
      state.all = action.payload;
    },

    setSelectedTags: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { setTags, setSelectedTags } = tagsSlice.actions;
export default tagsSlice.reducer;
