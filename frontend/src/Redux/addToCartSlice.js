import { createSlice } from "@reduxjs/toolkit";
export const addToCartSlice = createSlice({
  name: "addtocart",
  initialState: {
    addTocart: {
      isFetching: false,
      item: null,
      error: false,
    },
  },
  reducers: {
    addToCartStart: (state) => {
      state.addTocart.isFetching = true;
    },
    addTocartSuccess: (state, action) => {
      state.addTocart.isFetching = false;
      state.addTocart.error = false;
      state.addTocart.item = action.payload;
    },
    addToCartFault: (state) => {
      state.addTocart.isFetching = false;
      state.addTocart.item = null;
      state.addTocart.error = true;
    },
  },
});

export const { addToCartStart, addTocartSuccess, addToCartFault } =
  addToCartSlice.actions;

export default addToCartSlice.reducer;
