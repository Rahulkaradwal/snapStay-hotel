import { useMutation } from "@tanstack/react-query";
import { WithoutPayApi, WithoutPayBookingFormData } from "../apiBooking";
import toast from "react-hot-toast";

type BookingResponse = {
  status: "success";
  data: WithoutPayBookingFormData;
};

const useBookWithoutPay = () => {
  const { mutate: BookWithoutPayment, error } = useMutation({
    mutationFn: (BookingData: WithoutPayBookingFormData) =>
      WithoutPayApi(BookingData),
    onSuccess: (data) => {
      console.log(data);
      toast.success("Successfully booked");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { BookWithoutPayment, error };
};
export default useBookWithoutPay;
