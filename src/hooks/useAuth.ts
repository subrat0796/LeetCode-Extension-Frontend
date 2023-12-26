import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  setEmailLogin,
  setEmailLoginError,
  setEmailLoginSuccess,
  setEmailSignup,
  setEmailSignupError,
  setEmailSignupSuccess,
} from "@/redux/slice/authSlice";
import { signInUser } from "@/services/auth/signInUser";
import { signUpUser } from "@/services/auth/signUpUser";
import notify from "../utils/notifyToast";
import axios from "axios";

function useAuth() {
  const dispatch = useDispatch();

  // Todo - Clear the handle functions for authentication

  const handleSignInUser = useCallback(
    (
      email: string,
      password: string,
      name: string,
      leetCodeProfileUrl: string
    ) => {
      dispatch(setEmailSignup());
      signInUser(email, password, name, leetCodeProfileUrl)
        .then((response) => {
          const data = response.data;
          dispatch(setEmailSignupSuccess(data));

          notify("Signed in user successfully !", "success");
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

  const handleSignInUser = useCallback(
    (email: string, password: string) => {
      dispatch(setEmailLogin());
      signup;
    },
    [dispatch]
  );

  return {
    handleSignUpUser,
  };
}

export default useAuth;
