import { createSlice } from "@reduxjs/toolkit";

export const createFmSlice = createSlice({
  name: "createfm",
  initialState: {
    createfm: {
      isfetching: false,
      item: null,
      error: false,
      message: "",
    },
  },
  reducers: {
    createFmStart: (state) => {
      state.createfm.isfetching = true;
    },
    createFmSuccess: (state, action) => {
      state.createfm.isfetching = false;
      state.createfm.error = false;
      state.createfm.item = action.payload;
      state.createfm.message = "success";
    },
    createFmfault: (state) => {
      state.createfm.isfetching = false;
      state.createfm.item = false;
      state.createfm.error = true;
    },
  },
});
export const { createFmStart, createFmSuccess, createFmfault } =
  createFmSlice.actions;

export default createFmSlice.reducer;
