import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: EUser = {
  id: "",
  username: "",
  registerDate: "",
  email: "",
  password: "",
  imageUrl: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<EUser>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.registerDate = action.payload.registerDate;
      state.imageUrl = action.payload.imageUrl;
    },

    logout: (state) => {
      state.id = initialState.id;
      state.username = initialState.username;
      state.registerDate = initialState.registerDate;
      state.imageUrl = initialState.imageUrl;
    },

    setProfileImage: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { login, logout, setProfileImage } = userSlice.actions;
export default userSlice.reducer;
