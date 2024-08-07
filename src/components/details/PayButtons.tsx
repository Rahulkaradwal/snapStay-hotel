import { Spinner } from "flowbite-react";

type Props = {
  isProcessing: boolean;
  isBooking: "not-ready" | "booking" | "failed" | "finished";
  handleBooking: () => Promise<void>;
  handlePaying: () => Promise<void>;
  isLoading: boolean;
};

const PayButtons = ({
  isProcessing,
  handleBooking,
  handlePaying,
  isLoading,
}: Props) => {
  return (
    <div className="flex justify-between gap-4">
      <button
        type="button"
        onClick={handleBooking}
        className="w-fit rounded-sm bg-golden-800 p-2 transition duration-500 hover:text-black"
      >
        {isLoading ? <Spinner color="white" size="sm" /> : "Book & Pay Later"}
      </button>
      <button
        type="button"
        onClick={handlePaying}
        className="w-fit rounded-sm bg-golden-800 p-2 transition duration-500 hover:text-black"
      >
        {isProcessing ? <Spinner color="white" size="sm" /> : "Book & Pay Now"}
      </button>
    </div>
  );
};

export default PayButtons;
