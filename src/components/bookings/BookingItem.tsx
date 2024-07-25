import { motion } from "framer-motion";
import { MdOutlineBedroomParent } from "react-icons/md";

function BookingItem() {
  return (
    <motion.div
      className="gap bg-ligthDark mx-20 mb-10 mt-10 grid grid-cols-[2rem_1.75fr_1fr] gap-20 rounded-xl p-12 align-top shadow-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <MdOutlineBedroomParent className="text-4xl text-golden-800" />

      <div className="flex-start flex flex-col gap-10 text-slate-50">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold transition-all duration-300 hover:text-golden-800">
            Room Name
          </h1>
          <span className="rounded-full bg-golden-800 p-2 px-6 text-xl text-black">
            Price : $100
          </span>
        </div>
        <h2 className="text-xl">description & details</h2>
        <div className="flex gap-4">
          <button className="rounded-md bg-red-700 p-2 text-slate-50 transition-all duration-300 hover:bg-red-500">
            Cancel Booking
          </button>
          <button className="rounded-md bg-golden-800 p-2 text-slate-50 transition-all duration-300 hover:bg-golden-500 hover:bg-red-500">
            Check-Out
          </button>
          <button className="rounded-md bg-green-700 p-2 text-slate-50 transition-all duration-300 hover:bg-green-500">
            Check-In
          </button>
        </div>
      </div>
      <div className="max-h-56 min-h-40 min-w-40 max-w-96">
        <img
          className="h-full w-full cursor-pointer rounded-xl object-cover transition-all duration-500 hover:scale-105"
          src="/card/room2.jpg"
        />
      </div>
    </motion.div>
  );
}

export default BookingItem;
