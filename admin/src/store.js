import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./feature/products/productSlice";
import userSlice from "./feature/users/userSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
