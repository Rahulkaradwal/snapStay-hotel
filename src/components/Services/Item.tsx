import { motion } from "framer-motion";
import {
  MdOutlineBedroomParent,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const desktopScreen =
  "md:mb-10 md:grid md:grid-cols-[2rem_1.75fr_1fr] md:gap-20 md:p-12 md:align-top";

type Props = {
  title: string;
  description: string;
  image: string;
};

import { Link } from "react-router-dom";
const Item = ({ title, description, image }: Props) => {
  return (
    <motion.div
      className={`shadow-lithtDark mb-4 flex flex-col gap-2 border border-ligthDark p-4 shadow-lg md:rounded-xl md:bg-ligthDark ${desktopScreen} `}
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

      <div className="flex-start flex flex-col gap-2 md:gap-10">
        <h1 className="lg:text-3xl xl:text-4xl text-xl font-semibold transition-all duration-300 hover:text-golden-800 md:text-xl">
          {title}
        </h1>
        <h2 className="hidden text-xl md:block">{description}</h2>
        <Link
          to="/services"
          className="text-md mb-2 flex items-center gap-2 font-semibold text-golden-800 transition duration-500 hover:text-golden-800 md:text-xl"
        >
          <span>
            <MdOutlineKeyboardDoubleArrowRight />
          </span>
          Find Out More
        </Link>
      </div>
      <div className="h-52 md:max-h-96 md:min-h-40 md:min-w-40 md:max-w-96">
        <img
          className="h-full w-full cursor-pointer rounded-md object-cover transition-all duration-500 hover:scale-105"
          src={image}
        />
      </div>
    </motion.div>
  );
};

export default Item;
