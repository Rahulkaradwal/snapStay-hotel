import { Stripe } from "@stripe/stripe-js";

export interface Cabin {
  id: string;
  name: string;
  description: string;
  regularPrice: number;
  discount: number;
  images: string[];
}

export interface Iinput {
  id: string;
  stripe: Stripe | null;
}

// Define the structure for the success response
export interface GetCabinSuccessResponse {
  status: "success";
  data: Cabin;
}

// Define the structure for the error response
export interface ErrorResponse {
  status: "error";
  message: string;
}

export type WithoutPayBookingFormData = {
  startDate: Date;
  endDate: Date;
  numGuests: number;
  observations: string;
  breakfast: boolean;
  numNights: number;
  isPaid: boolean;
  cabin: string;
  guest: string;
  totalPrice: number;
  extraPrice: number;
  cabinPrice: number;
};

export type BookingSettings = {
  breakfastPrice: number;
  createdAt: string;
  _id: string;
  maxBookingLength: number;
  maxGuestPerBooking: number;
  minBookingLength: number;
};

export type CabinResponse = {
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
