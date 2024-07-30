import { motion } from "framer-motion";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Payment } from "../../api/apiBooking";

type Props = {
  name: string;
  price: number;
  id: string;
};

const FloatButton = ({ name, price, id }: Props) => {
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
    <motion.div
      className="absolute right-10 top-10 z-30 flex flex-col gap-3 rounded-md bg-dark p-10 text-slate-50 shadow-[0_0_50px_0px] shadow-golden-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: +150 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <h2 className="text-xl text-golden-800">{name}</h2>
      <h1 className="text-3xl">from ${price}</h1>
      <p>per person with pamering half board</p>
      <button
        onClick={makePayment}
        className="w-fit rounded-sm bg-golden-800 p-2 transition duration-500 hover:text-black"
      >
        {isProcessing ? "Processing..." : "Book Now"}
      </button>
    </motion.div>
  );
};

export default FloatButton;
