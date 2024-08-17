import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

type Props = {
  status: string;
  cabinName: string;
};

function CheckInHead({ status, cabinName }: Props) {
  const navigate = useNavigate();
  const flexClass = "flex justify-between items-center gap-2 md:gap-4";

  return (
    <div className={`${flexClass} p-2 md:p-4`}>
      <div className={flexClass}>
        <h1 className="text-sm font-semibold sm:text-2xl md:text-4xl">
          {cabinName}
        </h1>
        <span className="rounded-lg bg-golden-800 p-1 px-4 text-xs font-semibold uppercase text-black md:rounded-xl">
          {status}
        </span>
      </div>
      <button
        className={`${flexClass} ml-4 transition-all duration-300 hover:text-golden-800`}
      >
        <FaArrowLeftLong className="-mr-1 text-xs md:text-xl" />
        <span onClick={() => navigate(-1)} className="text-sm md:text-xl">
          Back
        </span>
      </button>
    </div>
  );
}

export default CheckInHead;
