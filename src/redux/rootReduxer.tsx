"use client";

import { combineReducers } from "redux";
import authSlice from "./slice/authSlice";
import userSlice from "./slice/userSlice";
import questionSlice from "./slice/questionSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  question: questionSlice,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
