import { signUpUrl } from "@/utils/constants";
import axios from "axios";

export const signUpUser = (email: any, password: any) => {
  const body = {
    email,
    password,
  };

  return axios.post(signUpUrl, body);
};
