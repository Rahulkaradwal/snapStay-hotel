import { motion } from "framer-motion";
import { Form, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputDiv from "../../ui/InputDiv";
import useSignup from "../../api/Auth/useSignup";
import { useState } from "react";
import { Spinner } from "flowbite-react";
import toast from "react-hot-toast";

const inputClass = "my-4 w-80 rounded-sm border bg-ligthDark p-2";

export interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  nationality: string;
  password: string;
  confirmPassword: string;
}

function SignupUserForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { signup } = useSignup();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    setIsLoading(true);
    await signup(data, {
      onSuccess: (data) => {
        toast.success(data.message);
        setIsLoading(false);
        reset();
      },
      onError: (error) => {
        toast.error(error.message);
        setIsLoading(false);
      },
    });
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
        <InputDiv htmlFor="firstName" errors={errors?.firstName?.message}>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            className={inputClass}
            {...register("firstName", { required: "First Name is required" })}
          />
        </InputDiv>

        <InputDiv htmlFor="lastName" errors={errors?.lastName?.message}>
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            className={inputClass}
            {...register("lastName", { required: "Last Name is required" })}
          />
        </InputDiv>

        <InputDiv htmlFor="email" errors={errors?.email?.message}>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className={inputClass}
            {...register("email", { required: "Email is required" })}
          />
        </InputDiv>

        <InputDiv htmlFor="phoneNumber" errors={errors?.phoneNumber?.message}>
          <input
            type="text"
            placeholder="Phone Number"
            id="phoneNumber"
            className={inputClass}
            {...register("phoneNumber", {
              required: "Phone Number is required",
            })}
          />
        </InputDiv>

        <InputDiv htmlFor="nationality" errors={errors?.nationality?.message}>
          <input
            type="text"
            placeholder="Nationality"
            id="nationality"
            className={inputClass}
            {...register("nationality", {
              required: "Nationality is required",
            })}
          />
        </InputDiv>

        <InputDiv htmlFor="password" errors={errors?.password?.message}>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className={inputClass}
            {...register("password", { required: "Password is required" })}
          />
        </InputDiv>

        <InputDiv
          htmlFor="confirmPassword"
          errors={errors?.confirmPassword?.message}
        >
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            className={inputClass}
            {...register("confirmPassword", {
              required: "Confirm Password is required",
            })}
          />
        </InputDiv>

        <button
          disabled={isLoading}
          className="mt-4 h-[2.6rem] rounded-sm border-[0.2px] border-gray-500 bg-ligthDark text-gray-500 transition-all duration-300 hover:text-slate-50"
        >
          {isLoading ? <Spinner color="white" size="sm" /> : "Create Account"}
        </button>
      </Form>

      <Link className="text-md z-50 mt-8 text-slate-50" to="/login">
        Already have an account?
      </Link>
    </motion.div>
  );
}

export default SignupUserForm;
