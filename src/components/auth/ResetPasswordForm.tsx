import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "flowbite-react";
import useResetPassword from "../../api/Auth/useResetPassword";

const desktopScreen =
  "h-full md:absolute md:right-0 md:flex md:w-1/3 md:flex-col md:items-center md:justify-center md:p-10 md:pt-1";
const mobileScreen = "flex flex-col items-center  justify-center p-6";
function ForgetPassword() {
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { token } = useParams();

  const { resetPassword, isPending } = useResetPassword();

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!password || !confirmPassword || !token) return;
    if (password !== confirmPassword) return;

    resetPassword({ password, confirmPassword, token });
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
      <img className="w-60" src="/logo-no-background.svg" alt="logo" />
      <form
        className="flex flex-col gap-4 pb-10 pt-20"
        onSubmit={submitHandler}
      >
        <input
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Create New Password"
          className="rounded-sm border bg-ligthDark p-2"
        />
        <label htmlFor="confirmPassword" className="sr-only">
          Confirm New Password
        </label>
        <input
          id="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm New Password"
          className="my-4 w-80 rounded-sm border bg-ligthDark p-2"
        />
        <button
          disabled={isPending}
          type="submit"
          className="my-4 rounded-sm bg-golden-500 p-2 text-slate-50 transition-all duration-300 hover:bg-golden-800 hover:text-black"
        >
          {isPending ? <Spinner color="white" size="sm" /> : "Reset Password"}
        </button>
      </form>
      <div className="text-md flex justify-between gap-4 text-slate-50">
        <Link to="/signup">Create Account?</Link>
        <Link to="/login">Login?</Link>
      </div>
    </motion.div>
  );
}

export default ForgetPassword;
