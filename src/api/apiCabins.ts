import { axiosInstance } from "./api";
import axios from "axios";

type BookingSettings = {
  breakfastPrice: number;
  createdAt: string;
  _id: string;
  maxBookingLength: number;
  maxGuestPerBooking: number;
  minBookingLength: number;
};

export type Cabin = {
  bookingSettings: BookingSettings;
  description: string;
  discount?: number;
  image: string;
  createdAt: string;
  maxCapacity: number;
  name: string;
  regularPrice: number;
  _id: string;
};

const getCabins = async (): Promise<Cabin[]> => {
  try {
    const response = await axiosInstance.get<{ data: Cabin[] }>("/cabins");
    console.log(response.data.data);
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

export default getCabins;
