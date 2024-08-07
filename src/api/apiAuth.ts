import axios, { AxiosResponse } from "axios";
import { axiosInstance, URL } from "./api";
import { IFormInput } from "../components/auth/SignupUser";

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

export const guestLogin = async (data: UserData): Promise<ResponseData> => {
  try {
    const response: AxiosResponse<ResponseData> = await axiosInstance.post(
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
export const guestSignup = async (data: IFormInput): Promise<ResponseData> => {
  try {
    const response: AxiosResponse<ResponseData> = await axiosInstance.post(
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
