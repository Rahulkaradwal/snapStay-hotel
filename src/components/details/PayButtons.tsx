import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Payment } from "../../api/apiBooking";

type Props = {
  id: string;
};

const PayButtons = ({ id }: Props) => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const makePayment = async () => {
    setIsProcessing(true);
    try {
      const stripe = await loadStripe(
        "pk_test_51PKq1n02bTSpcbhuqaywfxqs9IuqGt7yOhuQs48BUUq46m3uvjInTg9EBGcBybGK3F3a9OQnr8lXZfDYLGK7aSEV00ZKgtyHLL",
      );
      await Payment({ id, stripe });
    } catch (error) {
      console.log(error);
    } finally {
      setIsProcessing(false);
    }

    setIsProcessing(false);
  };
  return (
    <div className="flex justify-between gap-4">
      <button className="w-fit rounded-sm bg-golden-800 p-2 transition duration-500 hover:text-black">
        Book & Pay Later
      </button>
      <button
        onClick={makePayment}
        className="w-fit rounded-sm bg-golden-800 p-2 transition duration-500 hover:text-black"
      >
        {isProcessing ? "Processing..." : "Book & Pay Now"}
      </button>
    </div>
  );
};

export default PayButtons;
