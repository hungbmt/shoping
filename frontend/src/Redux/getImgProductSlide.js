import { createSlice } from "@reduxjs/toolkit";

export const getImgProductSlide = createSlice({
  name: "producImgs",
  initialState: {
    imgproducts: {
      isFetching: false,
      item: null,
      error: false,
    },
  },
  reducers: {
    ImgProductStart: (state) => {
      state.imgproducts.isFetching = true;
    },
    ImgProductSuccess: (state, action) => {
      state.imgproducts.isFetching = false;
      state.imgproducts.error = false;
      state.imgproducts.item = action.payload;
    },
    ImgProductFault: (state) => {
      state.imgproducts.isFetching = false;
      state.imgproducts.error = false;
      state.imgproducts.item = null;
    },
  },
});

export const { ImgProductStart, ImgProductSuccess, ImgProductFault } =
  getImgProductSlide.actions;

export default getImgProductSlide.reducer;
