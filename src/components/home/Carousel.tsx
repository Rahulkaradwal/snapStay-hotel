import { Carousel as FlowbiteCarousel } from "flowbite-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
  images: string[];
};

const Carousel = (props: Props) => {
  return (
    <div className="relative md:h-screen">
      <FlowbiteCarousel
        slideInterval={10000}
        leftControl={
          <ChevronLeftIcon className="h-4 w-4 text-slate-100 md:h-10 md:w-10" />
        }
        rightControl={
          <ChevronRightIcon className="h-4 w-4 text-slate-100 md:h-10 md:w-10" />
        }
      >
        {props.images.map((image, index) => (
          <div className="relative h-screen" key={index}>
            <img
              className="h-full w-full object-cover"
              src={image}
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark to-transparent"></div>
          </div>
        ))}
      </FlowbiteCarousel>
      {/* Heading and Buttons */}
      <motion.div
        className="flext-start absolute left-8 top-1/2 flex flex-col gap-10 p-8 pr-96 text-slate-100 md:top-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.75 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="mb-4 text-lg md:text-2xl">
          Welcome to Snap Stay, where luxury meets comfort in the heart of
          Toronto. Our elegant rooms, exquisite dining, and personalized service
          ensure a memorable stay.
        </h1>
        <motion.div
          className="flex gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Link
            to="/rooms"
            className="rounded bg-golden-800 px-4 py-2 text-sm font-semibold text-slate-100 transition-all duration-300 hover:bg-golden-800 hover:text-black md:text-xl"
          >
            Discover Rooms
          </Link>
          <Link
            to="services"
            className="rounded border border-white bg-transparent px-4 py-2 text-sm font-semibold text-golden-800 transition-all duration-300 hover:bg-white hover:text-black md:text-xl"
          >
            All Categories
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
