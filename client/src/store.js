import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./feature/profileSlice";

const store = configureStore({
  reducer: {
    profile: profileSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
