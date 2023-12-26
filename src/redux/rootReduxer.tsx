"use client";

import { combineReducers } from "redux";
import authSlice from "./slice/authSlice";

const rootReducer = combineReducers({
  auth: authSlice,
});

export default rootReducer;
