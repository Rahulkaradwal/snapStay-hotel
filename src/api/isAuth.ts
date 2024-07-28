import axios from "axios";
import { axiosInstance } from "./api";

type Guest = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  nationality: string;
  id: string;
};

type UserData = {
  status: string;
  token: string;
  guest: Guest;
};

export const guestLogin = async (): Promise<UserData> => {
  try {
    const response = await axiosInstance.get<{ data: UserData }>(
      "/guests/guestLogin",
    );
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
};
