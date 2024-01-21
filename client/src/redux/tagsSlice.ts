import { createSlice } from "@reduxjs/toolkit";

interface TagsSlice {
  value: string[];
  selected: string[];
}

const initialState: TagsSlice = {
  value: [],
  selected: [],
};

export const tagsSlice = createSlice({
  name: "tagsSlice",
  initialState,
  reducers: {
    setTags: (state, action) => {
      state.value = action.payload;
    },

    setSelectedTags: (state, action) => {
      state.selected = action.payload
    }
  },
});

export const { setTags, setSelectedTags } = tagsSlice.actions;
export default tagsSlice.reducer;
