import { toast } from "react-toastify";

const notify = (message: string, type: any, autoClose = 10000) => {
  toast(message, {
    type,
    autoClose: autoClose ? autoClose : 10000,
  });
};

export default notify;
