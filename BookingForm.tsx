import { useState } from "react";
import DateRangePicker from "../../ui/DateRangePicker";
import PayButtons from "./PayButtons";
import { loadStripe } from "@stripe/stripe-js";
import { Payment } from "../../api/apiBooking";
import toast from "react-hot-toast";
import useBookWithoutPay from "../../api/Booking/useBookWithoutPay";
import { CabinResponse, WithoutPayBookingFormData } from "../../api/types";

const STRIPE_PUBLIC_KEY =
  "pk_test_51PKq1n02bTSpcbhuqaywfxqs9IuqGt7yOhuQs48BUUq46m3uvjInTg9EBGcBybGK3F3a9OQnr8lXZfDYLGK7aSEV00ZKgtyHLL";

type Props = {
  data: CabinResponse;
};

 type FormValues = {
  startDate: Date;
  endDate: Date;
  numGuests: number;
  breakfast: boolean;
  observations: string;
};

type isBooking = "not-ready" | "booking" | "failed" | "finished";

const BookingForm = ({ data }: Props) => {
  const { BookWithoutPayment } = useBookWithoutPay();
  const guest = localStorage.getItem("guestId");
  const { _id: cabin, regularPrice: cabinPrice } = data;

  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isBooking, setIsBooking] = useState<isBooking>("not-ready");
  const [checked, setChecked] = useState<boolean>(false);

  const [formValues, setFormValues] = useState<WithoutPayBookingFormData>({
    startDate: Date,
    endDate: Date,
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

  const makePayment = async () => {
    setIsProcessing(true);
    try {
      const stripe = await loadStripe(STRIPE_PUBLIC_KEY);
      await Payment({ id, stripe });
    } catch (error) {
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleBooking = async () => {
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

    const numNights =
      (new Date(formValues.endDate).getTime() -
        new Date(formValues.startDate).getTime()) /
      (1000 * 3600 * 24);

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
        cabin,
        guest,
        totalPrice,
        numNights,
        isPaid,
        extraPrice,
        cabinPrice,
      });
      toast.success("Booking successful");
      setIsBooking("finished");
    } catch (error) {
      console.log(error);
      toast.error("Booking failed. Please try again");
      setIsBooking("failed");
    }
  };

  return (
    <div className="absolute -top-52 right-10 z-30 flex flex-col gap-6 rounded-md bg-dark px-20 py-10 text-slate-50 shadow-[0_0_50px_0px] shadow-golden-100">
      <DateRangePicker
        setStartDate={setFormValues.startDate}
        setEndDate={setFormValues.endDate}
        startDate={formValues.startDate}
        endDate={formValues.endDate}} 
      />
      <label className="block text-golden-800">
        <input
          name="breakfast"
          type="checkbox"
          checked={formValues.breakfast}
          onChange={handleInputChange}
          className="mr-4 cursor-pointer bg-ligthDark p-2 checked:bg-golden-800 focus:outline-golden-800"
        />
        Add Breakfast
      </label>
      <input
        name="numGuests"
        type="number"
        value={formValues.numGuests}
        onChange={handleInputChange}
        placeholder="Number of Guests"
        className="relative mr-4 w-full bg-ligthDark p-2 placeholder:text-slate-50/45 focus:outline-none"
      />
      <textarea
        name="observations"
        value={formValues.observations}
        onChange={handleInputChange}
        placeholder="Add Observations"
        className="border-none bg-ligthDark p-2 placeholder:text-slate-50/45 focus:outline-none"
      />
      <PayButtons
        makePayment={makePayment}
        isBooking={isBooking}
        isProcessing={isProcessing}
        handleBooking={handleBooking}
      />
    </div>
  );
};

export default BookingForm;
