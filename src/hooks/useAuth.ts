import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  setEmailLogin,
  setEmailLoginError,
  setEmailLoginSuccess,
  setEmailSignup,
  setEmailSignupError,
  setEmailSignupSuccess,
} from "../redux/slice/authSlice";
// import { signInUser } from "../services/auth/signInUser";
import { signInUser } from "../services/auth/signInUser";
import { signUpUser } from "../services/auth/signUpUser";
import notify from "../utils/notifyToast";
import axios from "axios";

function useAuth() {
  const dispatch = useDispatch();

  const handleSignInUser = useCallback(
    (email: string, password: string, onSuccess: any) => {
      dispatch(setEmailLogin());
      signInUser(email, password)
        .then((response) => {
          const data = response.data;
          dispatch(setEmailLoginSuccess(data));

          localStorage.setItem("leetcode-extension-backend-token", data.token);

          notify("Signed in user successfully !", "success");

          if (onSuccess) onSuccess();
        })
        .catch((error) => {
          if (!axios.isCancel(error)) {
            dispatch(
              setEmailLoginError(
                error?.response?.data?.errors?.[0]
                  ? error?.response?.data?.errors?.[0]
                  : "Some server error occurred, please try again later!"
              )
            );
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

  const handleSignUpUser = useCallback(
    (
      email: string,
      password: string,
      name: string,
      leetCodeProfileUrl: string,
      onSuccess: any
    ) => {
      dispatch(setEmailSignup());
      signUpUser(email, password, name, leetCodeProfileUrl)
        .then((response) => {
          const data = response.data;
          dispatch(setEmailSignupSuccess(data));

          localStorage.setItem("leetcode-extension-backend-token", data.token);

          notify("Signed up user successfully !", "success");

          if (onSuccess) onSuccess();
        })
        .catch((error) => {
          if (!axios.isCancel(error)) {
            dispatch(
              setEmailSignupError(
                error?.response?.data?.errors?.[0]
                  ? error?.response?.data?.errors?.[0]
                  : "Some server error occurred, please try again later!"
              )
            );
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
    handleSignUpUser,
    handleSignInUser,
  };
}

export default useAuth;
