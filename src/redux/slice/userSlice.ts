import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
  matchedUser: null,
  matchedUserSubmissions: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setGetUserDetails: (state) => {
      state.loading = true;
    },
    setGetUserDetailsSuccess: (state, action) => {
      state.loading = false;
      state.matchedUser = action.payload.matchedUser;
      state.matchedUserSubmissions = action.payload.data;
      state.message = action.payload.message;
    },
    setGetUserDetailsError: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.message = action.payload.message;
    },
  },
});

export const {
  setGetUserDetails,
  setGetUserDetailsSuccess,
  setGetUserDetailsError,
} = userSlice.actions;

export default userSlice.reducer;
