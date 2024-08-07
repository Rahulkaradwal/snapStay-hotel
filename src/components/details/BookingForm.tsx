import { useEffect, useState } from "react";
import DateRangePicker from "../../ui/DateRangePicker";
import PayButtons from "./PayButtons";
import toast from "react-hot-toast";
import useBookWithoutPay from "../../api/Booking/useBookWithoutPay";
import { CabinResponse } from "../../api/types";
import FormInput from "../../ui/FormInput";
import calculateNumNights from "../../utils/getNights";
import { useNavigate } from "react-router-dom";
import validateForm from "../../utils/validateBookingForm";
import useBookWithPayment from "../../api/Booking/useBookWithPayment";

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
  const { BookWithoutPayment } = useBookWithoutPay();
  const guest = localStorage.getItem("guestId");
  const { _id: cabinId, regularPrice: cabinPrice, maxCapacity } = data;

  // const [isProcessing, setIsProcessing] = useState(false);
  const [isBooking, setIsBooking] = useState<BookingStatus>("not-ready");
  const [totalPrice, setTotalPrice] = useState(cabinPrice);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  //funciton to process booking without payment
  const bookWithoutPayment = async () => {
    if (!guest) {
      toast.error("Something went wrong. Please login again");
      return;
    }

    if (!validateForm(formValues, maxCapacity, guest)) return;

    const numNights = calculateNumNights(
      formValues.startDate,
      formValues.endDate,
    );
    const extraPrice = formValues.breakfast ? 35 : 0;
    const isPaid = false;

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
      return true; // indicate booking was successful
    } catch (error) {
      console.error(error);
      toast.error("Booking failed. Please try again");
      setIsBooking("failed");
      return false; // indicate booking failed
    }
  };

  // handler to process booking without payment
  const handleBooking = async () => {
    setIsLoading(true);
    const success = await bookWithoutPayment();
    setIsLoading(false);
    if (success) {
      toast.success("Booking successful");
      setIsBooking("finished");
      navigate("/booking");
    }
  };

  // handler to process Booking with payment
  const handlePaying = async () => {
    setIsLoading(true);
    const success = await bookWithoutPayment();
    if (success) {
      toast.success("Booking successful. Processing payment...");
      await BookWithPayment();
    }
    setIsLoading(false);
  };

  const { isProcessing, BookWithPayment } = useBookWithPayment(cabinId);

  return (
    <div className="absolute -top-52 right-10 z-30 flex flex-col gap-6 rounded-md bg-dark px-20 py-10 text-slate-50 shadow-[0_0_50px_0px] shadow-golden-100">
      <p>Total Price: {totalPrice}.00 $</p>
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
        isLoading={isLoading}
        handleBooking={handleBooking}
        handlePaying={handlePaying}
      />
    </div>
  );
};

export default BookingForm;
