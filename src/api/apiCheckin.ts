import axios from "axios";
import { getToken } from "../utils/getToken";
import { URL } from "./api";

export const deleteBooking = async (id: string) => {
  const token = getToken();
  try {
    const response = await axios.delete(`${URL}/bookings/getBooking/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
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
