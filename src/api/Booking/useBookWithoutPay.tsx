import { useMutation } from "@tanstack/react-query";
import { WithoutPayApi, WithoutPayBookingFormData } from "../apiBooking";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const { mutate: BookWithoutPayment, error } = useMutation<
    BookingData,
    Error,
    WithoutPayBookingFormData
  >({
    mutationFn: (bookingData: WithoutPayBookingFormData) =>
      WithoutPayApi(bookingData),
    onSuccess: () => {
      toast.success("Successfully booked");
      navigate(`/booking`);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { BookWithoutPayment, error };
};

export default useBookWithoutPay;
