import { AiOutlineDollar } from "react-icons/ai";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RiHotelLine, RiMessage3Line } from "react-icons/ri";

function CheckInDetail() {
  const flexClass = "flex justify-between items-center gap-4  p-3 ";
  return (
    <div
      className={`{${flexClass} flex-col rounded-lg bg-ligthDark font-semibold shadow-lg`}
    >
      <div className={`${flexClass} -m-3 rounded-t-xl bg-golden-100`}>
        <div className={`${flexClass} gap-4`}>
          <RiHotelLine className="text-2xl" />
          <h1>5 nighst in Cabin</h1>
          <h1>1 Bedroom</h1>
        </div>
        <h1>Mon, Jul 01 2024 (24 days ago) - Fri, Jul 05 2024</h1>
      </div>
      <div className={`mt-6 flex gap-4 p-4`}>
        <p>Rahul Karadwal</p>
        <p className="font-normal">rahulkaradwal@gmail.com</p>
        <p className="font-normal">+91 123456789</p>
      </div>
      <div className={`flex items-center gap-4 p-4`}>
        <RiMessage3Line className="text-golden-800" />
        <p>
          Observations : I have a gluten allergy and would like to request a
          gluten free menu.
        </p>
      </div>
      <div className={`flex items-center gap-4 p-4`}>
        <FaRegCircleCheck className="text-golden-800" />
        <p>Breakfast included?</p>
        <p>Yes</p>
      </div>

      <div className={`${flexClass} justify-between rounded-lg bg-golden-800`}>
        <div className={flexClass}>
          <AiOutlineDollar />
          <p>Total Price : $835.00 ($800.00 cabin + $35.00 breakfast)</p>
        </div>
      </div>
      <p className="flex justify-end pt-6 text-sm font-normal">
        Booked Mon, Jul 01 2024, 9:24 PM
      </p>
    </div>
  );
}

export default CheckInDetail;
