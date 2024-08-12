import { motion } from "framer-motion";
import { MdOutlineBedroomParent } from "react-icons/md";
import BookingButtons from "./BookingButtons";
import { BookingData } from "../../api/types";

type Props = {
  Booking: BookingData;
};

function BookingItem({ Booking }: Props) {
  const {
    cabin: { image, name: cabinName, description },

    status,
    _id: id,
    isPaid,
    totalPrice,
  } = Booking;
  return (
    <motion.div
      className="gap mx-20 mb-10 mt-10 grid grid-cols-[2rem_1.75fr_1fr] gap-20 bg-ligthDark p-12 align-top shadow-md"
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
        <div className="grid grid-flow-col gap-6">
          <h1 className="col-span-10 text-2xl font-semibold transition-all duration-300 hover:text-golden-800">
            {cabinName}
          </h1>
          <span className="content-center rounded-sm bg-golden-800 text-center text-sm uppercase text-slate-100">
            {status}
          </span>
          <span className="text-md content-center rounded-sm border border-golden-800 text-center text-slate-100">
            Price : ${totalPrice}
          </span>
        </div>
        <h2 className="text-sm">{description}</h2>
        <BookingButtons
          bookingData={Booking}
          status={status}
          bookingId={id}
          isPaid={isPaid}
        />
      </div>
      <div className="max-h-56 min-h-40 min-w-40 max-w-96">
        <img
          className="h-full w-full cursor-pointer object-cover transition-all duration-500 hover:scale-105"
          src={image}
          alt={cabinName}
        />
      </div>
    </motion.div>
  );
}

export default BookingItem;
