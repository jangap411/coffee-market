import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
  email: "",
  isAdmin: false,
  img: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, { payload }) => {
      state.name = payload;
    },
    setUsername: (state, { payload }) => {
      state.username = payload;
    },
    setEmail: (state, { payload }) => {
      state.email = payload;
    },
    setIsAdmin: (state, { payload }) => {
      state.isAdmin = payload;
    },
    setImg: (state, { payload }) => {
      state.img = payload;
    },
  },
});

export const { setName, setUsername, setEmail, setIsAdmin, setImg } =
  userSlice.actions;

export default userSlice;
