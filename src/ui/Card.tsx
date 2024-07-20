import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="w-fit text-slate-50">
      <img
        className="h-[16rem] w-full bg-cover object-cover md:h-[28rem]"
        src="/card/room1.jpg"
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
        <h1>4=3 Special - High Season</h1>
        <p>4 nighst from $870.00 per person</p>
      </div>
    </div>
  );
};

export default Card;
