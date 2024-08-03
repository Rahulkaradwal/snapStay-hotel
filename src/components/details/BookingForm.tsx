import { Form } from "react-router-dom";
import DateRangePicker from "../../ui/DateRangePicker";
import PayButtons from "./PayButtons";
import { Cabin } from "../../api/apiRoom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Payment, WithoutPayBookingFormData } from "../../api/apiBooking";
import toast from "react-hot-toast";
import useBookWithoutPay from "../../api/Booking/useBookWithoutPay";

const STRIPE_PUBLIC_KEY =
  "pk_test_51PKq1n02bTSpcbhuqaywfxqs9IuqGt7yOhuQs48BUUq46m3uvjInTg9EBGcBybGK3F3a9OQnr8lXZfDYLGK7aSEV00ZKgtyHLL";

type Props = {
  data: Cabin;
};

const BookingForm = ({ data }: Props) => {
  // custom hook
  const { error, BookWithoutPayment } = useBookWithoutPay();

  // guest id from local storage
  const guest = localStorage.getItem("guestId");

  // cabin id
  const { _id: id } = data;
  const cabin = id;
  const cabinPrice = data.regularPrice;

  const [isProcessing, setIsProcessing] = useState<boolean>(false);
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WithoutPayBookingFormData>();

  const handleBooking = (formValues: WithoutPayBookingFormData) => {
    const isPaid = false;

    if (errors?.numGuests) {
      const msg = errors.numGuests.message;
      toast.error(msg || "Please add number of guests");
      return;
    }

    if (errors?.startDate || errors?.endDate) {
      toast.error("Please add dates");
      return;
    }
    if (new Date(formValues.startDate) > new Date(formValues.endDate)) {
      toast.error("Start date cannot be after end date");
      return;
    }
    if (!guest) {
      toast.error("Somethig went wrong. Please login Again");
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

    // console.log({ ...formValues, cabin, guest, totalPrice, numNights, isPaid });
    BookWithoutPayment({
      ...formValues,

      cabin,
      guest,
      totalPrice,
      numNights,
      isPaid,
      extraPrice,
      cabinPrice,
    });
  };

  const onSubmit = handleSubmit((data) => {
    const formattedData = {
      ...data,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      numGuests: Number(data.numGuests),
    };
    handleBooking(formattedData);
  });

  return (
    <Form
      onSubmit={onSubmit}
      className="absolute -top-52 right-10 z-30 flex flex-col gap-6 rounded-md bg-dark px-20 py-10 text-slate-50 shadow-[0_0_50px_0px] shadow-golden-100"
    >
      <DateRangePicker register={register} />
      <label className="block text-golden-800">
        <input
          {...register("breakfast")}
          type="checkbox"
          className="mr-4 cursor-pointer bg-ligthDark p-2 checked:bg-golden-800 focus:outline-golden-800"
        />
        Add Breakfast
      </label>

      <input
        {...register("numGuests", {
          required: true,
          min: { value: 1, message: "Minimum number of guests shuold be 1" },
          max: { value: 10, message: "Maximum number of guests is 10" },
        })}
        type="number"
        placeholder="Number of Guests"
        className="relative mr-4 w-full bg-ligthDark p-2 placeholder:text-slate-50/45 focus:outline-none"
      />

      <textarea
        {...register("observations")}
        name="observations"
        placeholder="Add Observations"
        className="border-none bg-ligthDark p-2 placeholder:text-slate-50/45 focus:outline-none"
        id="observations"
      />

      <PayButtons
        handleBooking={handleBooking}
        makePayment={makePayment}
        isProcessing={isProcessing}
      />
    </Form>
  );
};

export default BookingForm;
