import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../../api/Auth/useLogin";
import { useAuth } from "../../context/AuthContext";
import { getCurrentTimePlus30Minutes } from "../../utils/getTime";
import { Spinner } from "flowbite-react";
import { LoginResponse } from "../../api/types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const desktopScreen =
  "h-full md:absolute md:right-0 md:flex md:w-1/3 md:flex-col md:items-center   md:justify-center md:p-10 md:pt-1";
const mobileScreen = "flex z-10 flex-col items-center  justify-center p-6";

function LoginUserForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login, isPending } = useLogin();
  const { loginCtx } = useAuth();
  const time = Number(getCurrentTimePlus30Minutes());

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSuccess: (data: LoginResponse) => {
          localStorage.setItem("guestId", data.data.id.toString());

          loginCtx(data.token, time);
          navigate("/");
        },
      },
    );
  };

  return (
    <motion.div
      className={`${desktopScreen} ${mobileScreen}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: [0.8, 1.1, 1] },
      }}
    >
      <div className="absolute bottom-10 rounded-md bg-ligthDark p-4 text-sm">
        <p className="text-md text-slate-50">
          Login Credentials : user@gmail.com, user@123
        </p>
        <p className="text-md text-slate-50">
          Credit Card: 4242 4242 4242 4242
        </p>
        <p className="text-md text-slate-50">PIN: 5555</p>
      </div>
      <LazyLoadImage
        className="w-60"
        src="/logo-no-background.svg"
        alt="logo"
        effect="blur"
      />
      <form
        className="z-10 flex flex-col gap-4 pb-10 pt-20"
        onSubmit={submitHandler}
      >
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          required
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
          disabled={isPending}
          type="submit"
          className="my-4 rounded-sm bg-golden-500 p-2 text-slate-50 transition-all duration-300 hover:bg-golden-800 hover:text-black"
        >
          {isPending ? <Spinner color="white" size="sm" /> : "Login"}
        </button>
      </form>
      <div className="text-md z-50 flex justify-between gap-4 text-slate-50">
        <Link to="/signup">Create Account?</Link>
        <Link to="/forget-password">Forgot Password?</Link>
      </div>
    </motion.div>
  );
}

export default LoginUserForm;
