import { Form } from "react-router-dom";
import DateRangePicker from "../../ui/DateRangePicker";
import PayButtons from "./PayButtons";
import { Cabin } from "../../api/apiRoom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Payment } from "../../api/apiBooking";

const STRIPE_PUBLIC_KEY =
  "pk_test_51PKq1n02bTSpcbhuqaywfxqs9IuqGt7yOhuQs48BUUq46m3uvjInTg9EBGcBybGK3F3a9OQnr8lXZfDYLGK7aSEV00ZKgtyHLL";

type Props = {
  data: Cabin;
};
type IFormData = {
  startDate: Date;
  endDate: Date;
  numberOfGuests: number;
  observations: string;
  breakfast: boolean;
};

const BookingForm = ({ data }: Props) => {
  const { _id: id } = data;

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

    setIsProcessing(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    // makePayment();
    console.log(data);
  };

  console.log(errors);

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="absolute -top-52 right-10 z-30 flex flex-col gap-6 rounded-md bg-dark px-20 py-10 text-slate-50 shadow-[0_0_50px_0px] shadow-golden-100"
    >
      <DateRangePicker register={register} />
      <label className="block text-golden-800">
        <input
          {...register("breakfast")}
          type="checkbox"
          className="mr-4 cursor-pointer bg-ligthDark p-2 checked:bg-golden-800 focus:outline-golden-800"
        />
        Add BreakFast
      </label>

      <input
        {...register("numberOfGuests", {
          required: "Number of guests is required",
          min: {
            value: 1,
            message: "Minimum number of guests is 1",
          },
          max: {
            value: 10,
            message: "Maximum number of guests is 10",
          },
        })}
        type="input"
        placeholder="Number of Guests"
        className="mr-4 w-full bg-ligthDark p-2 placeholder:text-slate-50/45 focus:outline-none"
      />
      <textarea
        {...register("observations")}
        name="observations"
        placeholder="Add Observations"
        className="border-none bg-ligthDark p-2 placeholder:text-slate-50/45 focus:outline-none"
        id="observations"
      />
      <PayButtons makePayment={makePayment} isProcessing={isProcessing} />
    </Form>
  );
};

export default BookingForm;
