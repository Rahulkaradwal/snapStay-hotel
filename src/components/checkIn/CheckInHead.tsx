import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

type Props = {
  status: string;
  cabinName: string;
};

function CheckInHead({ status, cabinName }: Props) {
  const navigate = useNavigate();
  const flexClass = "flex justify-between items-center gap-4";

  return (
    <div className={`${flexClass} p-4`}>
      <div className={flexClass}>
        <h1 className="text-4xl font-semibold">{cabinName}</h1>
        <span className="rounded-xl bg-golden-800 p-1 px-4 text-sm font-semibold uppercase text-black">
          {status}
        </span>
      </div>
      <button
        className={`${flexClass} transition-all duration-300 hover:text-golden-800`}
      >
        <FaArrowLeftLong className="text-xl" />
        <span onClick={() => navigate(-1)}>Back</span>
      </button>
    </div>
  );
}

export default CheckInHead;
