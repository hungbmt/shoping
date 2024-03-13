import { createSlice } from "@reduxjs/toolkit";

const putProductImgSlice = createSlice({
  name: "updataImg",
  initialState: {
    updataImg: {
      isFetching: false,
      item: null,
      error: false,
    },
    updataSize: {
      isFetching: false,
      item: null,
      error: false,
    },
  },
  reducers: {
    updataImgStart: (state) => {
      state.updataImg.isFetching = true;
    },
    updataImgSucess: (state, action) => {
      state.updataImg.isFetching = false;
      state.updataImg.error = false;
      state.updataImg.item = action.payload;
    },
    updataImgFault: (state) => {
      state.updataImg.isFetching = false;
      state.updataImg.item = null;
      state.updataImg.error = true;
    },
  },
});

export const { updataImgStart, updataImgSucess, updataImgFault } =
  putProductImgSlice.actions;

export default putProductImgSlice.reducer;
