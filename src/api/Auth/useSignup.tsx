import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { guestSignup } from "../apiAuth";
import { IFormInput } from "../../components/auth/SignupUserForm";

function useSignup() {
  const { mutate: signup, error } = useMutation({
    mutationFn: (userData: IFormInput) => guestSignup(userData),
    onSuccess: () => {
      toast.success("Successfully signed up");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { signup, error };
}

export default useSignup;
