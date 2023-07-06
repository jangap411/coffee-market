import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./feature/profile/profileSlice";
import alertSlice from "./feature/alert/alertSlice";

const store = configureStore({
  reducer: {
    profile: profileSlice,
    alert: alertSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
