import axios from "axios";
import { axiosInstance, URL } from "../api";
import { LoaderFunctionArgs } from "react-router-dom";
import { LoaderData } from "../types";

interface Params {
  params: {
    token: string;
  };
}

export async function verifyEmailLoader(args: LoaderFunctionArgs<Params>) {
  const { params } = args;
  const { token } = params;

  if (token) {
    try {
      const response = await axiosInstance.get<LoaderData>(
        `${URL}/guests/verifyemail/${token}`,
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle the case when error.response is available
        if (error.response) {
          return {
            status: error.response.status,
            message: error.response.data.message,
          };
        }
        // Handle the case when error.response is not available
        return {
          status: "fail",
          message: "An unexpected error occurred.",
        };
      } else {
        // Handle any other type of error
        return {
          status: "fail",
          message: "An unexpected error occurred.",
        };
      }
    }
  } else {
    // Handle the case when the token is not present
    return {
      status: "fail",
      message: "Invalid or missing token.",
    };
  }
}
