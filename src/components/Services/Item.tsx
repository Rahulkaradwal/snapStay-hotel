import { motion } from "framer-motion";
import {
  MdOutlineBedroomParent,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

import { Link } from "react-router-dom";
const Item = () => {
  return (
    <motion.div
      className="gap mb-10 grid grid-cols-[2rem_1.75fr_1fr] gap-20 rounded-xl border bg-slate-50 p-12 align-top shadow-md"
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

      <div className="flex-start flex flex-col gap-10">
        <h1 className="text-4xl font-semibold transition-all duration-300 hover:text-golden-800">
          Comfortable Modern Accommodations
        </h1>
        <h2 className="text-xl">
          Experience unparalleled comfort in our modern accommodations,
          featuring contemporary design, plush bedding, and state-of-the-art
          amenities. Enjoy a relaxing stay with all the conveniences you need
          for a perfect getaway.
        </h2>
        <Link
          to="/services"
          className="flex items-center gap-2 text-xl font-semibold transition duration-500 hover:text-golden-800"
        >
          <span>
            <MdOutlineKeyboardDoubleArrowRight />
          </span>
          Find Out More
        </Link>
      </div>
      <div className="max-h-96 min-h-40 min-w-40 max-w-96">
        <img
          className="h-full w-full cursor-pointer transition-all duration-500 hover:scale-105"
          src="/card/room2.jpg"
        />
      </div>
    </motion.div>
  );
};

export default Item;
