import { createSlice } from "@reduxjs/toolkit";

const initialState: EUser = {
  _id: "",
  username: "",
  registerDate: "",
  email: "",
  password: "",
  profileImage: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state._id = action.payload._id;
      state.username = action.payload.username;
      state.registerDate = action.payload.registerDate;
      state.profileImage = action.payload.profileImage;
    },

    logout: (state) => {
      state._id = initialState._id;
      state.username = initialState.username;
      state.registerDate = initialState.registerDate;
      state.profileImage = initialState.profileImage;
    },

    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
  },
});

export const { login, logout, setProfileImage } = userSlice.actions;
export default userSlice.reducer;
