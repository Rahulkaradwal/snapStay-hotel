import { useState } from "react";
import DateRangePicker from "../../ui/DateRangePicker";
import PayButtons from "./PayButtons";
import { loadStripe } from "@stripe/stripe-js";
import { Payment } from "../../api/apiBooking";
import toast from "react-hot-toast";
import useBookWithoutPay from "../../api/Booking/useBookWithoutPay";
import { CabinResponse } from "../../api/types";
import FormInput from "../../ui/FormInput";
import calculateNumNights from "../../utils/getNights";
import { useNavigate } from "react-router-dom";

const STRIPE_PUBLIC_KEY =
  "pk_test_51PKq1n02bTSpcbhuqaywfxqs9IuqGt7yOhuQs48BUUq46m3uvjInTg9EBGcBybGK3F3a9OQnr8lXZfDYLGK7aSEV00ZKgtyHLL";

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

type isBooking = "not-ready" | "booking" | "failed" | "finished";

const BookingForm = ({ data }: Props) => {
  const navigate = useNavigate();
  const { BookWithoutPayment } = useBookWithoutPay();
  const guest = localStorage.getItem("guestId");
  const { _id: cabinId, regularPrice: cabinPrice } = data;

  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isBooking, setIsBooking] = useState<isBooking>("not-ready");

  const [formValues, setFormValues] = useState<FormValues>({
    startDate: "",
    endDate: "",
    numGuests: 1,
    breakfast: false,
    observations: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const BookWithPayment = async () => {
    setIsProcessing(true);
    try {
      const stripe = await loadStripe(STRIPE_PUBLIC_KEY);
      await Payment({ cabinId, stripe });
    } catch (error) {
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const bookWithoutPayment = async () => {
    const isPaid = false;

    if (
      !formValues.numGuests ||
      formValues.numGuests < 1 ||
      formValues.numGuests > 10
    ) {
      toast.error("Number of guests must be between 1 and 10");
      return;
    }

    if (!formValues.startDate || !formValues.endDate) {
      toast.error("Please add dates");
      return;
    }

    if (new Date(formValues.startDate) > new Date(formValues.endDate)) {
      toast.error("Start date cannot be after end date");
      return;
    }

    if (!guest) {
      toast.error("Something went wrong. Please login again");
      return;
    }

    const numNights = calculateNumNights(
      formValues.startDate,
      formValues.endDate,
    );

    let extraPrice = 0;
    if (formValues.breakfast) {
      extraPrice += 35;
    }

    const totalPrice = numNights * data.regularPrice + extraPrice;

    try {
      setIsBooking("booking");

      await BookWithoutPayment({
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
    } catch (error) {
      console.log(error);
      toast.error("Booking failed. Please try again");
      setIsBooking("failed");
    }
  };

  const handleBooking = async () => {
    try {
      await bookWithoutPayment();
      if (isBooking === "finished") {
        toast.success("Booking successful");
        navigate("/booking");
      }
    } catch (error) {
      toast.error("Booking failed, please try again");
    }
  };

  const handlePaying = async () => {
    try {
      await bookWithoutPayment();
      if (isBooking === "finished") {
        toast.success("Booking successful. Processing payment...");
        await BookWithPayment();
      }
    } catch (error) {
      toast.error(
        "An error occurred while processing the payment, but the booking was successful. You can pay later in the booking.",
      );
    }
  };

  return (
    <div className="absolute -top-52 right-10 z-30 flex flex-col gap-6 rounded-md bg-dark px-20 py-10 text-slate-50 shadow-[0_0_50px_0px] shadow-golden-100">
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

      <PayButtons
        isProcessing={isProcessing}
        isBooking={isBooking}
        handleBooking={handleBooking}
        handlePaying={handlePaying}
      />
    </div>
  );
};

export default BookingForm;
