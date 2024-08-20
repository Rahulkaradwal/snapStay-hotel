import { useMutation, useQueryClient } from "@tanstack/react-query";
import { WithoutPayApi } from "../apiBooking";
import toast from "react-hot-toast";
import { WithoutPayBookingFormData } from "../types";

export interface BookingData {
  status: string;
  data: {
    startDate: string; // ISO date string
    endDate: string; // ISO date string
    numNights: number;
    numGuests: number;
    cabinPrice: number;
    extraPrice: number;
    totalPrice: number;
    status: string;
    hasBreakfast: boolean;
    isPaid: boolean;
    observations: string;
    cabin: string; // ID as string
    guest: string; // ID as string
    createdAt: string; // ISO date string
    _id: string; // ID as string
  };
}

const useBookWithoutPay = () => {
  const queryClient = useQueryClient();

  const {
    mutate: BookOnly,
    error,
    isPending,
  } = useMutation<BookingData, Error, WithoutPayBookingFormData>({
    mutationFn: (bookingData: WithoutPayBookingFormData) =>
      WithoutPayApi(bookingData),
    onSuccess: () => {
      toast.success(
        "Booking Confirmed! You will receive an email with more details shortly.",
      );
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { BookOnly, error, isPending };
};

export default useBookWithoutPay;
