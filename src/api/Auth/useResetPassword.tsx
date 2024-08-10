import { useMutation } from "@tanstack/react-query";
import { resetPasswordApi } from "../apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useResetPassword() {
  const navigate = useNavigate();
  const { mutate: resetPassword, error } = useMutation({
    mutationFn: ({
      password,
      confirmPassword,
      token,
    }: {
      password: string;
      confirmPassword: string;
      token: string;
    }) => resetPasswordApi(password, confirmPassword, token),
    onSuccess: (data) => {
      console.log(data);
      toast.success("Password reset successfully");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(
        error.message || "Something went wrong while resetting password",
      );
    },
  });

  return { resetPassword, error };
}

export default useResetPassword;
