import { useMutation } from "@tanstack/react-query";
import { forgetPasswordApi } from "../apiAuth";
import toast from "react-hot-toast";
useMutation;

function useForgetPassword() {
  const { mutate: forgetPassword, error } = useMutation({
    mutationFn: (email: string) => forgetPasswordApi(email),
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(
        error.message || "Something went wrong while resetting password",
      );
    },
  });

  return { forgetPassword, error };
}

export default useForgetPassword;
