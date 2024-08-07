import toast from "react-hot-toast";
import validateForm from "../../utils/validateBookingForm";
import { BookingFormValues, CabinResponse } from "../../api/types";
import calculateNumNights from "../../utils/getNights";
import useBookWithoutPay from "./useBookWithoutPay";

function useBookWithoutPayment(
  formValues: BookingFormValues,
  data: CabinResponse,
  totalPrice: number,
  setIsBooking: (
    status: "not-ready" | "booking" | "failed" | "finished",
  ) => void,
) {
  const guest = localStorage.getItem("guestId");
  const { BookOnly } = useBookWithoutPay();
  const { _id: cabinId, regularPrice: cabinPrice, maxCapacity } = data;

  const BookWithoutPayment = async () => {
    if (!guest) {
      toast.error("Something went wrong. Please login again");
      return false;
    }

    if (!validateForm(formValues, maxCapacity, guest)) return false;

    const numNights = calculateNumNights(
      formValues.startDate,
      formValues.endDate,
    );
    const extraPrice = formValues.breakfast ? 35 : 0;
    const isPaid = false;

    try {
      setIsBooking("booking");
      await BookOnly({
        ...formValues,
        startDate: new Date(formValues.startDate),
        endDate: new Date(formValues.endDate),
        numGuests: Number(formValues.numGuests),
        cabin: cabinId,
        guest,
        totalPrice,
        numNights,
        isPaid,
        extraPrice,
        cabinPrice,
      });
      setIsBooking("finished");
      return true; // indicate booking was successful
    } catch (error) {
      console.error(error);
      toast.error("Booking failed. Please try again");
      setIsBooking("failed");
      return false; // indicate booking failed
    }
  };

  return { BookWithoutPayment };
}

export default useBookWithoutPayment;
