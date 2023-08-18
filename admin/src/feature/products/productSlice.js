import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  title: "",
  desc: "",
  img: "",
  categories: [],
  quantity: null,
  price: null,
  inStock: true,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setTitle: (state, { payload }) => {
      state.title = payload;
    },
  },
});

export const { setTitle } = productSlice.actions;

export default productSlice.reducer;
