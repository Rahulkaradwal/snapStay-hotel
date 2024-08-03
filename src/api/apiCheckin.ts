import axios from "axios";
import { getToken } from "../utils/getToken";
import { axiosInstance } from "./api";

export const deleteBooking = async (id: string) => {
  const token = getToken();
  try {
    await axiosInstance.delete(`${URL}/bookings/getBookings/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || error.message);
    } else {
      console.error("Unknown error:", error);
      throw new Error("An unknown error occurred");
    }
  }
};
