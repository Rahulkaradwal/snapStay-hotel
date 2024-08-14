import axios, { AxiosResponse } from "axios";
import { axiosInstance, URL } from "./api";
import { IFormInput } from "../components/auth/SignupUserForm";
import { LoginResponse, ResponseSignup } from "./types";

export type Guest = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  nationality: string;
  id: string;
};

export type ResponseData = {
  status: string;
  token: string;
  guest: Guest;
  isLoading?: boolean;
};

export type UserData = {
  email: string;
  password: string;
};

export type forgetPasswordResponse = {
  status: string;
  message: string;
};

export const guestLogin = async (data: UserData): Promise<LoginResponse> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axiosInstance.post(
      URL + "/guests/guestLogin",
      data,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
};

export const guestSignup = async (
  data: IFormInput,
): Promise<ResponseSignup> => {
  try {
    const response: AxiosResponse<ResponseSignup> = await axiosInstance.post(
      URL + "/guests/guestSignup",
      data,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
};

// Forget Password
export const forgetPasswordApi = async (
  email: string,
): Promise<forgetPasswordResponse> => {
  try {
    const response: AxiosResponse<forgetPasswordResponse> =
      await axiosInstance.post(URL + "/guests/forgetPassword", { email });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
};

// Reset Password

export const resetPasswordApi = async (
  password: string,
  confirmPassword: string,
  token: string,
): Promise<Guest> => {
  try {
    const response: AxiosResponse<Guest> = await axiosInstance.post(
      URL + "/guests/resetPassword/" + token,
      { password, confirmPassword },
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      throw new Error("Something went wrong while resetting password");
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
};
