import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
  slide: {
    img: string;
    title: string;
    description: string;
  };
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Card = ({ slide }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="w-fit cursor-pointer p-4 text-slate-50 transition-all duration-500 hover:scale-110"
    >
      <img
        className="h-[14rem] w-full bg-cover object-cover md:h-[22rem]"
        src={slide.img}
        alt="image"
      />
      <div className="flex flex-col gap-2 py-2">
        <div className="flex justify-between rounded-sm bg-golden-800 p-[0.15rem] px-4 py-2">
          <span>Special Offers</span>
          <Link
            className="transition duration-500 hover:text-black"
            to="/booking"
          >
            Book Now
          </Link>
        </div>
        <h1>{slide.title}</h1>
        <p>{slide.description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
