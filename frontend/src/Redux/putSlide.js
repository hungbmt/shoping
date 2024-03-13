import { createSlice } from "@reduxjs/toolkit";

export const putSlice = createSlice({
  name: "updata",
  initialState: {
    updata: {
      isfetching: false,
      item: null,
      error: false,
    },
  },
  reducers: {
    uptataStart: (state) => {
      state.updata.isfetching = true;
    },
    updataSuccess: (state, action) => {
      state.updata.isfetching = false;
      state.updata.error = false;
      state.updata.item = action.payload;
    },
    updatafault: (state) => {
      state.updata.isfetching = false;
      state.updata.item = false;
      state.updata.error = true;
    },
    // updataPRoduct
  },
});
export const { uptataStart, updataSuccess, updatafault } = putSlice.actions;

export default putSlice.reducer;
