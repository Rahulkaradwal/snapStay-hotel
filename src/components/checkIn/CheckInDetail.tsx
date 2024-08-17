import { AiOutlineDollar } from "react-icons/ai";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RiHotelLine, RiMessage3Line } from "react-icons/ri";
import { BookingData } from "../../api/types";
import { format, differenceInDays, parseISO } from "date-fns";

type Props = {
  data: BookingData;
};

function CheckInDetail({ data }: Props) {
  // Parse the ISO date strings into Date objects
  const start = parseISO(data.startDate);
  const end = parseISO(data.endDate);
  const createdDate = parseISO(data.createdAt);

  // Format the dates
  const formattedStartDate = format(start, "EEE, MMM dd yyyy");
  const formattedEndDate = format(end, "EEE, MMM dd yyyy");
  const formattedDate = format(createdDate, "EEE, MMM dd yyyy, h:mm a");

  // Calculate the difference in days
  const daysDifference = differenceInDays(end, start);

  const flexClass = "flex justify-between items-center md:gap-4  p-3 ";
  return (
    <div
      className={`{${flexClass} flex-col rounded-lg bg-ligthDark font-semibold shadow-lg`}
    >
      <div className={`${flexClass} -m-3 rounded-t-xl bg-golden-100`}>
        <div className={`${flexClass} gap-4`}>
          <RiHotelLine className="text-2xl" />
          <h1 className="text-sm">
            {data.numNights} {data.numNights > 1 ? "Nights" : "Night"}
          </h1>
          <h1 className="text-sm">{data.cabin.name}</h1>
        </div>
        <p className="text-xs">
          {formattedStartDate} ({daysDifference} days ago) - {formattedEndDate}
        </p>
      </div>
      <div className={`mt-6 flex flex-wrap gap-4 p-4`}>
        <p className="text-sm">
          {data.guest.firstName + " " + data.guest.lastName}
        </p>
        <p className="font-normal">{data.guest.email}</p>
        <p className="font-normal">{data.guest.phoneNumber}</p>
      </div>
      <div className={`flex items-center gap-4 p-4`}>
        <RiMessage3Line className="text-golden-800" />
        <p>
          Observations :{" "}
          {data.observations ? data.observations : "No observations"}
        </p>
      </div>
      <div className={`flex items-center gap-4 p-4`}>
        <FaRegCircleCheck className="text-golden-800" />
        <p>Breakfast included?</p>
        <p>{data.hasBreakfast ? "Yes" : "No"}</p>
      </div>

      <div
        className={`${flexClass} justify-between rounded-lg bg-golden-800 text-sm`}
      >
        <div className={flexClass}>
          <AiOutlineDollar />
          <p>
            Total Price : ${data.totalPrice}.00 (${data.cabinPrice}.00 cabin X{" "}
            {data.numNights} Number of Nights + ${data.extraPrice}.00 breakfast)
          </p>
        </div>
      </div>
      <p className="flex justify-end pt-6 text-sm font-normal">
        Booked {formattedDate}
      </p>
    </div>
  );
}

export default CheckInDetail;
