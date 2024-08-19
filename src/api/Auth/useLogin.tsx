import { useMutation } from "@tanstack/react-query";
import { guestLogin, UserData } from "../apiAuth";
import { LoginResponse } from "../types";

function useLogin() {
  const {
    mutate: login,
    error,
    isPending,
  } = useMutation<LoginResponse, unknown, UserData>({
    mutationFn: (guestData: UserData) => guestLogin(guestData),
  });

  return { login, error, isPending }; // Renaming isMutating to isLoading
}

export default useLogin;
