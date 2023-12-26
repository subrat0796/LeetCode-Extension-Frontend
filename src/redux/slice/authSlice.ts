import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  loading: false,
  error: null,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmailLogin: (state) => {
      state.loading = true;
    },
    setEmailLoginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.message = action.payload.message;
    },
    setEmailLoginError: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.message = action.payload.message;
    },
    setEmailSignup: (state) => {
      state.loading = true;
    },
    setEmailSignupSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.message = action.payload.message;
    },
    setEmailSignupError: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.message = action.payload.message;
    },
  },
});

export const {
  setEmailLogin,
  setEmailLoginError,
  setEmailLoginSuccess,
  setEmailSignup,
  setEmailSignupError,
  setEmailSignupSuccess,
} = authSlice.actions;

export default authSlice.reducer;
