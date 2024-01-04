import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  setGetUserDetails,
  setGetUserDetailsError,
  setGetUserDetailsSuccess,
} from "@/redux/slice/userSlice";
import { getUserDetails } from "@/services/user/getUserDetails";
import notify from "@/utils/notifyToast";
import axios from "axios";

function useUser() {
  const dispatch = useDispatch();

  const handleGetUserDetails = useCallback(
    (onFailure: any) => {
      dispatch(setGetUserDetails());
      const token = localStorage.getItem("leetcode-extension-backend-token");
      if (!token) {
        onFailure();
      }
      getUserDetails(token)
        .then((response) => {
          const data = response.data;
          dispatch(setGetUserDetailsSuccess(data));

          notify("Fetched User Details successfully!", "success");
        })
        .catch((error) => {
          if (!axios.isCancel(error)) {
            dispatch(
              setGetUserDetailsError(
                error?.response?.data?.errors?.[0]
                  ? error?.response?.data?.errors?.[0]
                  : "Some server error occurred, please try again later!"
              )
            );
            console.log(error);
            notify(
              error?.response?.data?.errors?.[0]?.message
                ? error?.response?.data?.errors?.[0]?.message
                : "Some server error occurred, please try again later!",
              "error"
            );
          }
        });
    },
    [dispatch]
  );

  return {
    handleGetUserDetails,
  };
}

export default useUser;
