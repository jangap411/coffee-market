import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  isSignedIn: false,
  user: null,
  sessionToken: null,
};

// create profile slice
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setIsSignIn: (state, { payload }) => {
      state.isSignedIn = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setSessionToken: (state, { payload }) => {
      state.sessionToken = payload;
    },
  },
});

export const { setIsSignIn, setUser, setSessionToken } = profileSlice.actions;

export default profileSlice.reducer;
