import { getUserDetailsUrl } from "@/utils/constants";
import axios from "axios";

export const getUserDetails = (token: any) => {
  return axios.get(getUserDetailsUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
