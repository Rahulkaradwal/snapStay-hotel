import React from "react";
import { Link } from "react-router-dom";

type Props = {
  slide: {
    img: string;
    title: string;
    description: string;
  };
};

const Card = ({ slide }: Props) => {
  return (
    <div className="w-fit p-4 text-slate-50">
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
    </div>
  );
};

export default Card;
