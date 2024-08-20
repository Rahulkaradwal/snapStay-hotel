import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Spinner } from "flowbite-react";
import useForgetPassword from "../../api/Auth/useForgetPassword";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const desktopScreen =
  "h-full md:absolute md:right-0 md:flex md:w-1/3 md:flex-col md:items-center md:justify-center md:p-10 md:pt-1";
const mobileScreen = "flex flex-col items-center  justify-center p-6";
function ForgetPassword() {
  const [email, setEmail] = useState<string>("");

  const { forgetPassword, isPending } = useForgetPassword();

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email) return;

    forgetPassword(email);
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
      <LazyLoadImage
        className="w-60"
        src="/logo-no-background.svg"
        alt="logo"
        effect="blur"
      />
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
          disabled={isPending}
          type="submit"
          className="my-4 rounded-sm bg-golden-500 p-2 text-slate-50 transition-all duration-300 hover:bg-golden-800 hover:text-black"
        >
          {isPending ? <Spinner color="white" size="sm" /> : "Submit"}
        </button>
      </form>
      <div className="text-md text-slate-50">
        <Link to="/signup">Create Account?</Link>
      </div>
    </motion.div>
  );
}

export default ForgetPassword;
