import axios from "axios";
import { axiosInstance, URL } from "./api";
import { Stripe } from "@stripe/stripe-js";

// Define the structure for the cabin data
interface Cabin {
  id: string;
  name: string;
  description: string;
  regularPrice: number;
  discount: number;
  images: string[];
}

interface Iinput {
  id: string;
  stripe: Stripe | null;
}

// Define the structure for the success response
interface GetCabinSuccessResponse {
  status: "success";
  data: Cabin;
}

// Define the structure for the error response
interface ErrorResponse {
  status: "error";
  message: string;
}

export const Payment = async (
  data: Iinput,
): Promise<GetCabinSuccessResponse | ErrorResponse> => {
  try {
    const response = await axiosInstance.get(
      `${URL}/bookings/checkout-session/${data.id}`,
    );
    const sessionId = response.data.session.id;

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
      throw new Error("Stripe has not been loaded");
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
};
