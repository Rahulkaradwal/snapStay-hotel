import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Payment } from "../../api/apiBooking";
import toast from "react-hot-toast";

const STRIPE_PUBLIC_KEY =
  "pk_test_51PKq1n02bTSpcbhuqaywfxqs9IuqGt7yOhuQs48BUUq46m3uvjInTg9EBGcBybGK3F3a9OQnr8lXZfDYLGK7aSEV00ZKgtyHLL";

function useBookWithPayment(cabinId: string) {
  const [isProcessing, setIsProcessing] = useState(false);

  const BookWithPayment = async () => {
    setIsProcessing(true);
    try {
      const stripe = await loadStripe(STRIPE_PUBLIC_KEY);
      await Payment({ cabinId, stripe });
      toast.success("Payment successful");
    } catch (error) {
      console.error(error);
      toast.error(
        "An error occurred while processing the payment, but the booking was successful. You can pay later in the booking.",
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return { isProcessing, BookWithPayment };
}

export default useBookWithPayment;
