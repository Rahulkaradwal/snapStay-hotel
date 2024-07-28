import axios, { AxiosResponse } from "axios";
import { axiosInstance, URL } from "./api";

// {
//     "status": "success",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTU5MDliZDNhNTE0OWNmYTM5MWM2ZCIsImlhdCI6MTcyMjIwNzQ4NSwiZXhwIjoxNzIyMjA5Mjg1fQ.f-xDKhAGRI1UaUOEYYKrkayzFNNrStjKpuwDEpYwKz0",
//     "data": {
//         "firstName": "Rahul",
//         "lastName": "Karadwal",
//         "email": "rahul@gmail.com",
//         "nationality": "Indian",
//         "phoneNumber": "7853289696",
//         "id": "66a5909bd3a5149cfa391c6d"
//     }
// }

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
