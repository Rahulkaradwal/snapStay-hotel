type Props = {
  isProcessing: boolean;
  makePayment: () => void;
};

const PayButtons = ({ isProcessing, makePayment }: Props) => {
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
