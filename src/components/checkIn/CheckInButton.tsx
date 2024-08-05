import { useState } from "react";
import useCheckin from "../../api/Checkin/useCheckin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCheckout from "../../api/Checkin/useCheckout";

type Props = {
  bookingId: string;
  status: string;
};

function CheckInButton({ bookingId, status }: Props) {
  const navigate = useNavigate();
  const flexClass = "flex justify-end items-center gap-4 p-4  ";
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { checkin, error } = useCheckin();
  const { checkout, error: checkOutError } = useCheckout();
  const handleCheckIn = async (bookingId: string) => {
    try {
      setIsLoading(true);
      await checkin(bookingId);
      if (error) {
        toast.error(error.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const handleCheckOut = async (bookingId: string) => {
    try {
      setIsLoading(true);
      await checkout(bookingId);
      if (checkOutError) {
        toast.error(checkOutError.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${flexClass} rounded-lg`}>
      {status === "checked-in" ? (
        <button
          onClick={() => handleCheckOut(bookingId)}
          className="rounded-lg border border-golden-800 p-2 px-4 font-semibold text-slate-50 shadow-lg transition-all duration-300 hover:text-golden-800"
          disabled={isLoading}
        >
          Check Out
        </button>
      ) : (
        <button
          onClick={() => handleCheckIn(bookingId)}
          className="rounded-lg border border-golden-800 p-2 px-4 font-semibold text-slate-50 shadow-lg transition-all duration-300 hover:text-golden-800"
          disabled={isLoading}
        >
          Check In
        </button>
      )}
      <button
        onClick={() => navigate(-1)}
        className="rounded-lg border border-golden-800 p-2 px-4 font-semibold text-slate-50 shadow-lg transition-all duration-300 hover:text-golden-800"
      >
        Back
      </button>
    </div>
  );
}

export default CheckInButton;
