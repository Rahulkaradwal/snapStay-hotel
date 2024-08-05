import { useState } from "react";
import useCheckin from "../../api/Checkin/useCheckin";
import toast from "react-hot-toast";

type Props = {
  bookingId: string;
};

function CheckInButton({ bookingId }: Props) {
  const flexClass = "flex justify-end items-center gap-4 p-4  ";
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { checkin, error } = useCheckin();
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

  return (
    <div className={`${flexClass} rounded-lg`}>
      <button
        onClick={() => handleCheckIn(bookingId)}
        className="bg-lightDark rounded-lg bg-golden-800 p-2 px-4 font-semibold text-slate-50 transition-all duration-300 hover:text-black"
      >
        {isLoading ? "Processing..." : "Check In"}
      </button>
      <button className="rounded-lg border border-golden-800 p-2 px-4 font-semibold text-slate-50 shadow-lg transition-all duration-300 hover:text-golden-800">
        Back
      </button>
    </div>
  );
}

export default CheckInButton;
