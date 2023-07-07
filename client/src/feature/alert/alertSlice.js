import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  isAlertOpen: false,
  alertMessage: "",
  alertType: "success",
};

// create slice
const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlertOpen: (state, action) => {
      state.isAlertOpen = action.payload;
    },
    setAlertMessage: (state, action) => {
      state.alertMessage = action.payload;
    },
    setAlertType: (state, action) => {
      state.alertType = action.payload;
    },
  },
});

export const { setAlertMessage, setAlertOpen, setAlertType } =
  alertSlice.actions;

export default alertSlice.reducer;
