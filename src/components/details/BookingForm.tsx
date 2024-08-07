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
    setIsLoading(true);
    const success = await BookWithoutPayment();
    if (success) {
      toast.success("Booking successful. Processing payment...");
      await BookWithPayment();
    }
    setIsLoading(false);
  };

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
