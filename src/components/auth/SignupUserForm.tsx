import { motion } from "framer-motion";
import { Form, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputDiv from "../../ui/InputDiv";
import useSignup from "../../api/Auth/useSignup";
import { Spinner } from "flowbite-react";
import toast from "react-hot-toast";
import { ResponseSignup } from "../../api/types";

const inputClass = "md:my-4 md:w-80 md:rounded-sm md:border bg-ligthDark p-2";

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
  const { signup, isPending } = useSignup();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    signup(data, {
      onSuccess: (signupData: ResponseSignup) => {
        toast.success(signupData.message);
        reset();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: [0.8, 1.1, 1] },
      }}
      className="flex h-fit flex-col items-center justify-center p-4 pt-20 md:h-full md:p-10"
    >
      <img
        className="z-20 w-32 md:w-60"
        src={"/logo-no-background.svg"}
        alt="logo"
      />

      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="z-20 mt-10 grid grid-cols-2 gap-6 md:gap-4"
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
          disabled={isPending}
          className="h-[2.6rem] rounded-sm border-[0.2px] border-gray-500 bg-golden-800 text-white transition-all duration-300 hover:text-black md:mt-4"
        >
          {isPending ? <Spinner color="white" size="sm" /> : "Create Account"}
        </button>
      </Form>

      <Link className="md:text-md z-50 mt-32 text-slate-50 md:mt-8" to="/login">
        Already have an account?
      </Link>
    </motion.div>
  );
}

export default SignupUserForm;
