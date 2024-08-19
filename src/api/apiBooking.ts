import axios from "axios";
import { axiosInstance, URL } from "./api";
import { getToken } from "../utils/getToken";
import { BookingData } from "./Booking/useBookWithoutPay";
import {
  BookingResponse,
  BookingType,
  ErrorResponse,
  GetCabinSuccessResponse,
  Iinput,
  WithoutPayBookingFormData,
} from "./types";

export const Payment = async (
  data: Iinput,
): Promise<GetCabinSuccessResponse | ErrorResponse> => {
  const token = getToken();
  try {
    const response = await axiosInstance.get(
      `${URL}/bookings/checkout-session/${data.cabinId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const sessionId = response.data?.session?.id;
    if (!sessionId) {
      throw new Error("Invalid session ID in response");
    }

    if (data.stripe) {
      const result = await data.stripe.redirectToCheckout({ sessionId });
      if (result.error) {
        console.error("Error:", result.error.message);
        return {
          status: "error",
          message: result.error.message || "An error occurred",
        };
      }
    } else {
      return {
        status: "error",
        message: "Stripe has not been loaded",
      };
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      return {
        status: "error",
        message: error.response?.data?.message || error.message,
      };
    } else {
      console.error("Unknown error:", error);
      return {
        status: "error",
        message: "An unknown error occurred",
      };
    }
  }
};

// api call to book room/cabin without paying

export const WithoutPayApi = async (
  data: WithoutPayBookingFormData,
): Promise<BookingData> => {
  const token = getToken();
  try {
    const response = await axiosInstance.post<BookingData>(
      `${URL}/bookings/create-booking`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

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

// api call to get all guests bookings

export const getMyBookings = async (): Promise<BookingResponse> => {
  const token = getToken();
  try {
    const response = await axiosInstance.get<BookingResponse>(
      `${URL}/bookings/get-my-bookings`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
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

export const getBookingApi = async (id: string): Promise<BookingType> => {
  const token = getToken();
  try {
    const response = await axiosInstance.get<BookingType>(
      `${URL}/bookings/getBooking/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
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

// Cancel Booking

export const cancelBookingApi = async (id: string) => {
  const token = getToken();
  try {
    const response = await axios.get(`${URL}/bookings/cancelBooking/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || error.message);
    } else {
      console.error("Unknown error:", error);
      throw new Error("An unknown error occurred");
    }
  }
};
