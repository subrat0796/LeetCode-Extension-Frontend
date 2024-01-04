import { signInUrl } from "@/utils/constants";
import axios from "axios";

export const signInUser = (email: any, password: any) => {
  const body = {
    email,
    password,
  };

  return axios.post(signInUrl, body);
};
