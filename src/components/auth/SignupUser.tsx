import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SignupUser() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 },
      }}
      className="flex h-full flex-col items-center justify-center p-10 pt-1"
    >
      <img className="z-50 w-60" src={"/logo-no-background.svg"} alt="logo" />

      <form className="z-50 grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="my-4 w-80 rounded-sm border bg-ligthDark p-2"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="my-4 w-80 rounded-sm border bg-ligthDark p-2"
        />
        <input
          type="text"
          placeholder="Email"
          className="my-4 w-80 rounded-sm border bg-ligthDark p-2"
        />
        <input
          type="text"
          placeholder="Phone"
          className="my-4 w-80 rounded-sm border bg-ligthDark p-2"
        />
        <input
          type="text"
          placeholder="Nationality"
          className="my-4 w-80 rounded-sm border bg-ligthDark p-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 w-80 rounded-sm border bg-ligthDark p-2"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="my-4 w-80 rounded-sm border bg-ligthDark p-2"
        />
        <button className="mt-4 h-[2.6rem] rounded-sm border-[0.2px] border-gray-500 bg-ligthDark text-gray-500 transition-all duration-300 hover:text-slate-50">
          Create Account
        </button>
      </form>

      <Link className="text-md z-50 mt-8 text-slate-50" to="/login">
        Already have an account?
      </Link>
    </motion.div>
  );
}

export default SignupUser;
