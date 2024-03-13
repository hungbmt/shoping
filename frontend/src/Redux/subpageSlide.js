import { createSlice } from "@reduxjs/toolkit";

export const subpageSlide = createSlice({
  name: "subpage",
  initialState: {
    subpage: {
      isFetching: false,
      item: null,
      error: false,
    },
    addTocart: {
      isFetching: false,
      item: null,
      error: false,
    },
  },
  reducers: {
    subpageStart: (state) => {
      state.subpage.isFetching = true;
    },
    subpageSuccess: (state, action) => {
      state.subpage.isFetching = false;
      state.subpage.error = false;
      state.subpage.item = action.payload;
    },
    subpageFault: (state) => {
      state.subpage.isFetching = false;
      state.subpage.item = null;
      state.subpage.error = true;
    },
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

export const {
  subpageStart,
  subpageSuccess,
  subpageFault,
  addToCartStart,
  addTocartSuccess,
  addToCartFault,
} = subpageSlide.actions;

export default subpageSlide.reducer;
