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
      className="mx-4 mb-10 mt-10 gap-20 overflow-hidden bg-ligthDark p-2 align-top shadow-md md:mx-20 md:grid md:grid-cols-[2rem_1.75fr_1fr] md:p-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <MdOutlineBedroomParent className="hidden text-golden-800 md:block md:text-4xl" />

      <div className="flex-start flex flex-col gap-10 text-slate-50">
        <div className="grid grid-flow-col gap-2 p-2 sm:gap-4 md:gap-6">
          <h1 className="col-span-10 text-lg font-semibold transition-all duration-300 hover:text-golden-800 sm:text-xl md:text-2xl">
            {cabinName}
          </h1>
          <span className="content-center rounded-sm bg-golden-800 text-center text-xs uppercase text-slate-100 sm:text-sm md:text-sm">
            {status}
          </span>
          <span className="md:text-md content-center rounded-sm border border-golden-800 text-center text-xs text-slate-100 sm:text-sm">
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
      <div className="max-h-56 min-h-40 min-w-40 max-w-96 pt-4 sm:pt-0 md:pt-0">
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
