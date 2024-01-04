"use client";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReduxer";

const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV !== "production",
});

export default store;
