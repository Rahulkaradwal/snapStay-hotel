 export const URL: string = "https://snap-stay-backend.vercel.app";
// export const URL: string = "http://localhost:3000";

import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});
