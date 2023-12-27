import { getAllQuestionsUrl } from "@/utils/constants";
import axios from "axios";

export const getQuestions = () => {
  return axios.get(getAllQuestionsUrl);
};
