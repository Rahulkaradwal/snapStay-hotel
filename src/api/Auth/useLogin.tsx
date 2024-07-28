import { useMutation } from "@tanstack/react-query";
import { guestLogin } from "../isAuth";
useMutation;

function useLogin() {
  const { mutate, isLoading, error } = useMutation({
    mutationFn: guestLogin,
  });

  return { data, isLoading, error };
}
