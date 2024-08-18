import { useMutation } from "@tanstack/react-query";
import { forgetPasswordApi } from "../apiAuth";
import toast from "react-hot-toast";
useMutation;

function useForgetPassword() {
  const { mutate: forgetPassword, error, isPending } = useMutation({
    mutationFn: (email: string) => forgetPasswordApi(email),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(
        error.message || "Something went wrong while resetting password",
      );
    },
  });

  return { forgetPassword, error ,isPending}; 
}

export default useForgetPassword;
