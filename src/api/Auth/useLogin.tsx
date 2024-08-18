import { useMutation } from "@tanstack/react-query";
import { guestLogin, UserData } from "../apiAuth";
import toast from "react-hot-toast";
import { LoginResponse } from "../types";


function useLogin() {
  const {
    mutate: login,
    error,
    isPending,
  } = useMutation<LoginResponse, unknown, UserData>({
    mutationFn: (guestData: UserData) => guestLogin(guestData),
    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    },
  });

  return { login, error, isPending }; // Renaming isMutating to isLoading
}


export default useLogin;
