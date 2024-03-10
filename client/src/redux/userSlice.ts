import { createSlice } from "@reduxjs/toolkit";
import { IUserData, IUserState } from "../types";

const initialState: IUserData & IUserState = {
  isLogged: false,
  _id: "",
  username: "",
  registerDate: "",
  email: "",
  password: "",
  profileImage: "",
  watched: [],
  watching: [],
  planToWatch: [],
  stalled: [],
  dropped: [],
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      state._id = action.payload._id;
      state.username = action.payload.username;
      state.registerDate = action.payload.registerDate;
      state.profileImage = action.payload.profileImage;
      // state.email = action.payload.email;
      // state.password = action.payload.password;
      // state.watched = action.payload.watched;
      // state.watching = action.payload.watching;
      // state.planToWatch = action.payload.planToWatch;
      // state.stalled = action.payload.stalled;
      // state.dropped = action.payload.dropped;
    },

    logout: (state) => {
      state.isLogged = false;
      state._id = initialState._id;
      state.username = initialState.username;
      state.registerDate = initialState.registerDate;
      state.profileImage = initialState.profileImage;
      // state.email = initialState.email;
      // state.password = initialState.password;
      // state.watched = initialState.watched;
      // state.watching = initialState.watching;
      // state.planToWatch = initialState.planToWatch;
      // state.stalled = initialState.stalled;
      // state.dropped = initialState.dropped;
    },

    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
  },
});

export const { login, logout, setProfileImage } = userSlice.actions;
export default userSlice.reducer;
