import useCheckin from "../../api/Checkin/useCheckin";
import { useNavigate } from "react-router-dom";
import useCheckout from "../../api/Checkin/useCheckout";

type Props = {
  bookingId: string;
  status: string;
};

function CheckInButton({ bookingId, status }: Props) {
  const navigate = useNavigate();
  const flexClass = "flex justify-end items-center gap-4 p-4  ";

  const { checkin,  isPending: isCheckInPending } = useCheckin();
  const { checkout,  isPending: isCheckOutPending } = useCheckout();
  const handleCheckIn = async (bookingId: string) => {
       checkin(bookingId )
  };

  const handleCheckOut = async (bookingId: string) => {
       checkout(bookingId);
  };

  return (
    <div className={`${flexClass} rounded-lg`}>
      {status === "checked-in" ? (
        <button
          onClick={() => handleCheckOut(bookingId)}
          className="rounded-lg border border-golden-800 p-2 px-4 font-semibold text-slate-50 shadow-lg transition-all duration-300 hover:text-golden-800"
          disabled={isCheckOutPending}
        >
          Check Out
        </button>
      ) : status === "checked-out" ? null : (
        <button
          onClick={() => handleCheckIn(bookingId)}
          className="rounded-lg border border-golden-800 p-2 px-4 font-semibold text-slate-50 shadow-lg transition-all duration-300 hover:text-golden-800"
          disabled={isCheckInPending}
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
