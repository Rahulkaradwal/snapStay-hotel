type Props = {
  isProcessing: boolean;
  isBooking: "not-ready" | "booking" | "failed" | "finished";
  handleBooking: () => Promise<void>;
  handlePaying: () => Promise<void>;
  // makePayment: () => void;
};

const PayButtons = ({ isProcessing, handleBooking, handlePaying }: Props) => {
  return (
    <div className="flex justify-between gap-4">
      <button
        type="button"
        onClick={handleBooking}
        className="w-fit rounded-sm bg-golden-800 p-2 transition duration-500 hover:text-black"
      >
        Book & Pay Later
      </button>
      <button
        type="button"
        onClick={handlePaying}
        className="w-fit rounded-sm bg-golden-800 p-2 transition duration-500 hover:text-black"
      >
        {isProcessing ? "Processing..." : "Book & Pay Now"}
      </button>
    </div>
  );
};

export default PayButtons;
