import { useNavigate } from "react-router-dom";

import { CabinResponse } from "../../api/types";
import { PiUsersThree } from "react-icons/pi";
import { motion } from "framer-motion";

type RoomItemProps = {
  room: CabinResponse;
};

function RoomItem({ room }: RoomItemProps) {
  const navigate = useNavigate();
  return (
    <motion.div
      className="min-w-80 md:w-fit"
      // initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: [0.8, 1.1, 1] },
      }}
    >
      <div className="relative flex max-w-96 flex-col rounded-xl bg-ligthDark bg-clip-border text-slate-50 shadow-md md:w-96">
        <div className="bg-blue-gray-500 shadow-blue-gray-500/40 relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg transition-all duration-300 hover:scale-105">
          <img
            className="h-full w-full object-cover"
            src={room.image}
            alt="room cover"
          />
        </div>
        <div className="p-6">
          <h5 className="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
            {room.name}
          </h5>
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="pb-2">$ {room.regularPrice}</span>
            <span className="flex items-center gap-2">
              <PiUsersThree className="text-md text-golden-800" />{" "}
              {room.maxCapacity} People
            </span>
            <span>Discount: {room.discount} $</span>
          </div>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {room.description.split(" ").slice(0, 20).join(" ") +
              (room.description?.split(" ").length > 20 ? "..." : "")}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            onClick={() => navigate(`/details/${room._id}`)}
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg bg-golden-800 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-golden-500/20 transition-all hover:shadow-lg hover:shadow-golden-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            See Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default RoomItem;
