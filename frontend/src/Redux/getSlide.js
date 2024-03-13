import { createSlice } from "@reduxjs/toolkit";

export const producSlide = createSlice({
  name: "producs",
  initialState: {
    produc: {
      isFetching: false,
      item: null,
      error: false,
    },
  },
  reducers: {
    producStart: (state) => {
      state.produc.isFetching = true;
    },
    producSuccess: (state, action) => {
      state.produc.isFetching = false;
      state.produc.error = false;
      state.produc.item = action.payload;
    },
    producFault: (state) => {
      state.produc.isFetching = false;
      state.produc.item = null;
      state.produc.error = true;
    },
  },
});

export const { producStart, producSuccess, producFault } = producSlide.actions;

export default producSlide.reducer;
