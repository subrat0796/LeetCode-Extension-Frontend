import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: null,
  loading: false,
  error: null,
  message: null,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setGetAllQuestions: (state) => {
      state.loading = true;
    },
    setGetAllQuestionsSuccess: (state, action) => {
      state.loading = false;
      state.questions = action.payload.data;
      state.message = action.payload.message;
    },
    setGetAllQuestionsError: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.error = action.payload.error;
    },
  },
});

export const {
  setGetAllQuestions,
  setGetAllQuestionsError,
  setGetAllQuestionsSuccess,
} = questionSlice.actions;

export default questionSlice.reducer;
