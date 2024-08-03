import { axiosInstance } from "./api";
import axios from "axios";
import { CabinResponse } from "./types";

const getRooms = async (): Promise<CabinResponse[]> => {
  try {
    const response = await axiosInstance.get<{ data: CabinResponse[] }>(
      "/cabins",
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

export const getRoom = async (id: string): Promise<CabinResponse> => {
  try {
    const response = await axiosInstance.get<{ data: CabinResponse }>(
      `/cabins/${id}`,
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

export default getRooms;
