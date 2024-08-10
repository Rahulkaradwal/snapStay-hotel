import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Spinner } from "flowbite-react";
import useForgetPassword from "../../api/Auth/useForgetPassword";

function ForgetPassword() {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { forgetPassword } = useForgetPassword();

  console.log(isLoading);

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    console.log(isLoading);
    try {
      await forgetPassword(email, {
        onSuccess: () => {
          setIsLoading(false);
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      console.log(isLoading);
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

        <button
          disabled={isLoading}
          type="submit"
          className="my-4 rounded-sm bg-golden-500 p-2 text-slate-50 transition-all duration-300 hover:bg-golden-800 hover:text-black"
        >
          {isLoading ? <Spinner color="white" size="sm" /> : "Submit"}
        </button>
      </form>
      <div className="text-md text-slate-50">
        <Link to="/signup">Create Account?</Link>
      </div>
    </motion.div>
  );
}

export default ForgetPassword;
