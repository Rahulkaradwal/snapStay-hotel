import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function LoginUser() {
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
      <img className="w-60" src={"/logo-no-background.svg"} alt="logo" />
      <form className="flex flex-col gap-4 pb-10 pt-20">
        <input
          type="text"
          placeholder="Username"
          className="bg-ligthDark my-4 w-80 rounded-sm border p-2"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="bg-ligthDark rounded-sm border p-2"
        ></input>
        <button className="my-4 rounded-sm bg-golden-500 p-2 text-slate-50 transition-all duration-300 hover:bg-golden-800 hover:text-black">
          Login
        </button>
      </form>
      <div className="-pt-10 text-md flex justify-between gap-4 text-slate-50">
        <Link to="/signup">Create Account?</Link>
        <Link to="/forgot">Forgot Password?</Link>
      </div>
    </motion.div>
  );
}

export default LoginUser;
