import { Spinner } from "flowbite-react";

const buttonClass =
  "min-w-40 rounded-sm bg-golden-800 p-2 font-semibold transition duration-500 hover:text-black";

type Props = {
  isProcessing: boolean;
  isBooking: "not-ready" | "booking" | "failed" | "finished";
  handleBooking: () => Promise<void>;
  handlePaying: () => Promise<void>;
  isLoading: boolean;
  disabled: boolean;
};

const PayButtons = ({
  isProcessing,
  handleBooking,
  handlePaying,
  isLoading,
  disabled,
}: Props) => {
  return (
    <div className="flex justify-between gap-4">
      <button
        type="button"
        onClick={handleBooking}
        disabled={disabled}
        className={`${buttonClass} ${disabled ? "cursor-not-allowed" : ""}`}
      >
        {isLoading ? <Spinner color="white" size="sm" /> : "Book & Pay Later"}
      </button>
      <button
        disabled={disabled}
        type="button"
        onClick={handlePaying}
        className={`${buttonClass} ${disabled ? "cursor-not-allowed" : ""}`}
      >
        {isProcessing ? <Spinner color="white" size="sm" /> : "Book & Pay Now"}
      </button>
    </div>
  );
};

export default PayButtons;
