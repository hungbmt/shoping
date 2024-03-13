import { createSlice } from "@reduxjs/toolkit";

const putProducSizetSlice = createSlice({
  name: "updataSize",
  initialState: {
    updataSize: {
      isFetching: false,
      item: null,
      error: false,
    },
  },
  reducers: {
    updataSizeStart: (state) => {
      state.updataSize.isFetching = true;
    },
    updataSizeSuccess: (state, action) => {
      state.updataSize.isFetching = false;
      state.updataSize.error = false;
      state.updataSize.item = action.payload;
    },
    updataSizeFault: (state) => {
      state.updataSize.isFetching = false;
      state.updataSize.error = true;
      state.updataSize.item = null;
    },
  },
});

export const { updataSizeStart, updataSizeSuccess, updataSizeFault } =
  putProducSizetSlice.actions;

export default putProducSizetSlice.reducer;
