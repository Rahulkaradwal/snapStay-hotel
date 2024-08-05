type Props = {
  isProcessing: boolean;
  handleBooking: () => Promise<void>;
  makePayment: () => void;
};

const PayButtons = ({ isProcessing, handleBooking, makePayment }: Props) => {
  const handlePayNow = () => {
    handleBooking();
    makePayment();
  };

  return (
    <div className="flex justify-between gap-4">
      <button
        onClick={handleBooking}
        className="w-fit rounded-sm bg-golden-800 p-2 transition duration-500 hover:text-black"
      >
        Book & Pay Later
      </button>
      <button
        onClick={handlePayNow}
        className="w-fit rounded-sm bg-golden-800 p-2 transition duration-500 hover:text-black"
      >
        {isProcessing ? "Processing..." : "Book & Pay Now"}
      </button>
    </div>
  );
};

export default PayButtons;
