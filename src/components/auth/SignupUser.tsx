import { Link } from "react-router-dom";

function SignupUser() {
  return (
    <div className="absolute right-0 flex h-full w-1/3 flex-col items-center justify-center p-10 pt-1">
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
          Create Account
        </button>
      </form>
      <Link className="text-md text-slate-50" to="/login">
        Already have an account?
      </Link>
    </div>
  );
}

export default SignupUser;
