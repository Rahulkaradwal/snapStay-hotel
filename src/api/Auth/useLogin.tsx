import { useMutation } from "@tanstack/react-query";
import { guestLogin, UserData } from "../apiAuth";
import { useNavigate } from "react-router-dom";
useMutation;

function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, error } = useMutation({
    mutationFn: (guestData: UserData) => guestLogin(guestData),
    onSuccess: (data) => {
      console.log(data);
      navigate("/home");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { login, error };
}

export default useLogin;
