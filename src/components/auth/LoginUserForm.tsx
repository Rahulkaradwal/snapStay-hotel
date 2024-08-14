import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../../api/Auth/useLogin";
import { useAuth } from "../../context/AuthContext";
import { getCurrentTimePlus30Minutes } from "../../utils/getTime";
import { Spinner } from "flowbite-react";
import { LoginResponse } from "../../api/types";

function LoginUserForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { login } = useLogin();
  const { loginCtx } = useAuth();
  const time = Number(getCurrentTimePlus30Minutes());

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsLoading(true);
    try {
      await login(
        { email, password },
        {
          onSuccess: (data: LoginResponse) => {
            localStorage.setItem("guestId", data.data.id.toString());

            loginCtx(data.token, time);
            navigate("/");

            setIsLoading(false);
          },
        },
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="absolute right-0 flex h-full w-1/3 flex-col items-center justify-center p-10 pt-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <img className="w-60" src="/logo-no-background.svg" alt="logo" />
      <form
        className="flex flex-col gap-4 pb-10 pt-20"
        onSubmit={submitHandler}
      >
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="my-4 w-80 rounded-sm border bg-ligthDark p-2"
        />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="rounded-sm border bg-ligthDark p-2"
        />
        <button
          disabled={isLoading}
          type="submit"
          className="my-4 rounded-sm bg-golden-500 p-2 text-slate-50 transition-all duration-300 hover:bg-golden-800 hover:text-black"
        >
          {isLoading ? <Spinner color="white" size="sm" /> : "Login"}
        </button>
      </form>
      <div className="text-md flex justify-between gap-4 text-slate-50">
        <Link to="/signup">Create Account?</Link>
        <Link to="/forget-password">Forgot Password?</Link>
      </div>
    </motion.div>
  );
}

export default LoginUserForm;
