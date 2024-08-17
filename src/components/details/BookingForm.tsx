import { useEffect, useState } from "react";
import DateRangePicker from "../../ui/DateRangePicker";
import PayButtons from "./PayButtons";
import toast from "react-hot-toast";
import { CabinResponse } from "../../api/types";
import FormInput from "../../ui/FormInput";
import calculateNumNights from "../../utils/getNights";
import { useNavigate } from "react-router-dom";
import useBookWithPayment from "../../api/Booking/useBookWithPayment";
import useBookWithoutPayment from "../../api/Booking/useBookWithoutPayment";
import { isDateOverlap } from "../../utils/checkAvailability";

type Props = {
  data: CabinResponse;
};

type FormValues = {
  startDate: string;
  endDate: string;
  numGuests: number;
  breakfast: boolean;
  observations: string;
};

type BookingStatus = "not-ready" | "booking" | "failed" | "finished";

const BookingForm = ({ data }: Props) => {
  const navigate = useNavigate();
  const { _id: cabinId, regularPrice: cabinPrice } = data;

  const [isBooking, setIsBooking] = useState<BookingStatus>("not-ready");
  const [totalPrice, setTotalPrice] = useState(cabinPrice);
  const [isLoading, setIsLoading] = useState(false);
  const [isDateUnavailable, setIsDateUnavailable] = useState(false);

  const [formValues, setFormValues] = useState<FormValues>({
    startDate: "",
    endDate: "",
    numGuests: 1,
    breakfast: false,
    observations: "",
  });

  useEffect(() => {
    const numNights = calculateNumNights(
      formValues.startDate,
      formValues.endDate,
    );
    const extraPrice = formValues.breakfast ? 35 : 0;
    const price = numNights * data.regularPrice + extraPrice;
    setTotalPrice(price);
  }, [formValues, data.regularPrice]);

  useEffect(() => {
    if (
      !formValues.startDate ||
      !formValues.endDate ||
      !data.bookedDates ||
      data.bookedDates.length === 0
    ) {
      setIsDateUnavailable(false);
      return;
    }

    // check if the selected dates are already booked
    const isBooked = data.bookedDates.some((date) => {
      const bookedStartDate = new Date(date.startDate);
      const bookedEndDate = new Date(date.endDate);
      return isDateOverlap(
        new Date(formValues.startDate),
        new Date(formValues.endDate),
        bookedStartDate,
        bookedEndDate,
      );
    });

    if (isBooked) {
      toast.error(
        "This room is not available for the selected dates. Please choose another date range.",
      );
    }

    setIsDateUnavailable(isBooked);
  }, [formValues.startDate, formValues.endDate, data.bookedDates]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target;

    if (target instanceof HTMLInputElement) {
      const { name, value, type, checked } = target;
      setFormValues((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    } else if (target instanceof HTMLTextAreaElement) {
      const { name, value } = target;
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  // custom hook for book with payment method
  const { isProcessing, BookWithPayment } = useBookWithPayment(cabinId);

  // custom hook for book without payment
  const { BookWithoutPayment } = useBookWithoutPayment(
    formValues,
    data,
    totalPrice,
    setIsBooking,
  );

  // handler to process Booking without payment
  const handleBooking = async () => {
    if (isDateUnavailable) {
      toast.error(
        "Cannot proceed with booking. The selected dates are unavailable.",
      );
      return;
    }
    setIsLoading(true);
    const success = await BookWithoutPayment();
    setIsLoading(false);
    if (success) {
      toast.success("Booking successful");
      setIsBooking("finished");
      navigate("/booking");
    }
  };

  // handler to process Booking with payment
  const handlePaying = async () => {
    if (isDateUnavailable) {
      toast.error(
        "Cannot proceed with payment. The selected dates are unavailable.",
      );
      return;
    }
    setIsLoading(true);
    const success = await BookWithoutPayment();
    if (success) {
      toast.success("Booking successful. Processing payment...");
      await BookWithPayment();
    }
    setIsLoading(false);
  };

  return (
    <div className="-top-52 right-10 flex flex-col gap-6 rounded-md bg-dark p-4 text-slate-50 shadow-[0px_0px_5px_0px] shadow-golden-100 md:absolute md:z-30 md:px-20 md:py-10 md:shadow-[0_0_50px_0px]">
      <p className="text-md">
        Total Price: {totalPrice ? totalPrice : cabinPrice}.00 $
      </p>
      <DateRangePicker formValues={formValues} setFormValues={setFormValues} />
      <FormInput
        name="breakfast"
        formValues={formValues}
        handleInputChange={handleInputChange}
        inputType="checkbox"
      />
      <FormInput
        name="numGuests"
        formValues={formValues}
        handleInputChange={handleInputChange}
        inputType="input"
      />
      <FormInput
        name="observations"
        formValues={formValues}
        handleInputChange={handleInputChange}
        inputType="textArea"
      />
      {isDateUnavailable && (
        <p className="text-red-500">
          Unavailable, Please choose different dates.
        </p>
      )}
      <PayButtons
        isProcessing={isProcessing}
        isBooking={isBooking}
        isLoading={isLoading}
        handleBooking={handleBooking}
        handlePaying={handlePaying}
        disabled={isDateUnavailable}
      />
    </div>
  );
};

export default BookingForm;
