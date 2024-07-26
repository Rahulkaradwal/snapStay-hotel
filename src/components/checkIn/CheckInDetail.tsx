import { AiOutlineDollar } from "react-icons/ai";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RiHotelLine, RiMessage3Line } from "react-icons/ri";

function CheckInDetail() {
  const flexClass = "flex justify-between items-center gap-4  p-3 ";
  return (
    <div
      className={`{${flexClass} bg-ligthDark flex-col rounded-lg font-semibold shadow-lg`}
    >
      <div className={`${flexClass} -m-3 rounded-t-xl bg-golden-100`}>
        <div className={`${flexClass} gap-4`}>
          <RiHotelLine />
          <h1>5 nighst in Cabin</h1>
          <h1>1 Bedroom</h1>
        </div>
        <h1>Mon, Jul 01 2024 (24 days ago) - Fri, Jul 05 2024</h1>
      </div>
      <div className={`${flexClass} `}>
        <p>Rahul Karadwal</p>
        <p>rahulkaradwal@gmail.com</p>
        <p>+91 123456789</p>
      </div>
      <div className={flexClass}>
        <RiMessage3Line />
        <p>
          Observations : I have a gluten allergy and would like to request a
          gluten free menu.
        </p>
      </div>
      <div>
        <FaRegCircleCheck />
        <p>Breakfast included? Yes</p>
      </div>

      <div className={`${flexClass} justify-between bg-golden-800`}>
        <div className={flexClass}>
          <AiOutlineDollar />
          <p>Total Price : $835.00 ($800.00 cabin + $35.00 breakfast)</p>
        </div>
      </div>
      <p className="flex justify-end">Booked Mon, Jul 01 2024, 9:24 PM</p>
    </div>
  );
}

export default CheckInDetail;
