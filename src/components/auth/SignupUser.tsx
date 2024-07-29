import { motion } from "framer-motion";
import { Form, Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const inputClass = "my-4 w-80 rounded-sm border bg-ligthDark p-2";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  nationality: string;
  password: string;
  confirmPassword: string;
}

function SignupUser() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

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

      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="z-50 grid grid-cols-2 gap-4"
      >
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          className={inputClass}
          {...register("firstName", { required: "First Name is required" })}
        />
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          className={inputClass}
          {...register("lastName", { required: "Last Name is required" })}
        />
        <input
          type="text"
          id="email"
          placeholder="Email"
          className={inputClass}
          {...register("email", { required: "Email is required" })}
        />
        <input
          type="text"
          placeholder="Phone"
          id="phoneNumber"
          className={inputClass}
          {...register("phoneNumber", { required: "Phone number is required" })}
        />
        <input
          type="text"
          placeholder="Nationality"
          id="nationality"
          className={inputClass}
          {...register("nationality", { required: "Nationality is required" })}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className={inputClass}
          {...register("password", { required: "Password is required" })}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          className={inputClass}
          {...register("confirmPassword", {
            required: "Confirm Password is required",
          })}
        />
        <button className="mt-4 h-[2.6rem] rounded-sm border-[0.2px] border-gray-500 bg-ligthDark text-gray-500 transition-all duration-300 hover:text-slate-50">
          Create Account
        </button>
      </Form>

      <Link className="text-md z-50 mt-8 text-slate-50" to="/login">
        Already have an account?
      </Link>
    </motion.div>
  );
}

export default SignupUser;
