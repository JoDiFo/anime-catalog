import { createSlice } from "@reduxjs/toolkit";

interface TagsSlice {
  value: string[];
}

const initialState: TagsSlice = {
  value: [],
};

export const tagsSlice = createSlice({
  name: "tagsSlice",
  initialState,
  reducers: {
    setTags: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTags } = tagsSlice.actions;
export default tagsSlice.reducer;
