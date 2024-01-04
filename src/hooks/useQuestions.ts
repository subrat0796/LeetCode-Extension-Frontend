import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  setGetAllQuestions,
  setGetAllQuestionsError,
  setGetAllQuestionsSuccess,
} from "../redux/slice/questionSlice";
import { getQuestions } from "../services/question/getQuestions";
import notify from "../utils/notifyToast";
import axios from "axios";

function useQuestions() {
  const dispatch = useDispatch();

  const handleGetAllQuestions = useCallback(() => {
    dispatch(setGetAllQuestions());

    getQuestions()
      .then((response) => {
        const data = response.data;
        dispatch(setGetAllQuestionsSuccess(data));

        notify("Fetched All Questions Succesfully!", "success");
      })
      .catch((error) => {
        if (!axios.isCancel(error)) {
          dispatch(
            setGetAllQuestionsError(
              error?.response?.data?.errors?.[0]
                ? error?.response?.data?.errors?.[0]
                : "Some server error occurred, please try again later!"
            )
          );
          notify(
            error?.response?.data?.errors?.[0]
              ? error?.response?.data?.errors?.[0]
              : "Some server error occurred, please try again later!",
            "error"
          );
        }
      });
  }, [dispatch]);

  return {
    handleGetAllQuestions,
  };
}

export default useQuestions;
