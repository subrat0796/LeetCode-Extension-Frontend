import { signUpUrl } from "@/utils/constants";
import axios from "axios";

export const signUpUser = (
  email: any,
  password: any,
  name: any,
  leetCodeProfileUrl: any
) => {
  const body = {
    email,
    password,
    name,
    leetCodeProfileUrl,
  };

  return axios.post(signUpUrl, body);
};
