import { useState } from "react";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { Payment } from "../apiBooking";

const STRIPE_PUBLIC_KEY =
  "pk_test_51PKq1n02bTSpcbhuqaywfxqs9IuqGt7yOhuQs48BUUq46m3uvjInTg9EBGcBybGK3F3a9OQnr8lXZfDYLGK7aSEV00ZKgtyHLL";

function useBookWithPayment(cabinId: string) {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const BookWithPayment = async () => {
    setIsProcessing(true);
    try {
      const stripe = await loadStripe(STRIPE_PUBLIC_KEY);
      await Payment({ cabinId, stripe });
    } catch (error) {
      console.error(error);
      toast.error(
        "An error occurred while processing the payment, but the booking was successful. You can pay later in the booking.",
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return { BookWithPayment, isProcessing };
}

export default useBookWithPayment;
