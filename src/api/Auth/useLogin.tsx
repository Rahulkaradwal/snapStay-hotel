import { useMutation } from "@tanstack/react-query";
import { guestLogin, UserData } from "../apiAuth";
import toast from "react-hot-toast";
useMutation;

function useLogin() {
  const { mutate: login, error } = useMutation({
    mutationFn: (guestData: UserData) => guestLogin(guestData),
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { login, error };
}

export default useLogin;
