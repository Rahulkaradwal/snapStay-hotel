import { useMutation } from "@tanstack/react-query";
import { guestLogin, UserData } from "../apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
useMutation;

function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, error } = useMutation({
    mutationFn: (guestData: UserData) => guestLogin(guestData),
    // onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { login, error };
}

export default useLogin;
