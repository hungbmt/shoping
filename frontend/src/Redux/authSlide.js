import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    register: {
      isfetching: false,
      item: null,
      error: false,
    },
    login: {
      isfetching: false,
      item: null,
      error: false,
    },
  },
  reducers: {
    registerStart: (state) => {
      state.register.isfetching = true;
    },
    registerSuccess: (state, action) => {
      state.register.isfetching = false;
      state.register.item = action.payload;
      state.register.error = false;
    },
    registerFault: (state) => {
      state.register.isfetching = false;
      state.register.error = true;
    },
    loginStart: (state) => {
      state.login.isfetching = true;
      state.login.item = null;
    },
    loginSuccess: (state, action) => {
      state.login.isfetching = false;
      state.login.item = action.payload;
      state.login.error = false;
    },
    loginFault: (state) => {
      state.login.isfetching = false;
      state.login.error = true;
    },
    // logout refresh token
    logOutStart: (state) => {
      state.login.isfetching = true;
    },
    logOutSuccess: (state) => {
      state.login.isfetching = false;
      state.login.error = false;
      state.login.item = null;
      state.login.currentUser = null;
    },
    logOutFault: (state) => {
      state.login.isfetching = false;
      state.login.error = true;
    },
  },
});
export const {
  registerStart,
  registerSuccess,
  registerFault,
  loginStart,
  loginSuccess,
  loginFault,
  logOutStart,
  logOutSuccess,
  logOutFault,
} = authSlice.actions;

export default authSlice.reducer;
