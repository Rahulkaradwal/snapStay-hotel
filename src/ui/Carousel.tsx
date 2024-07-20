import { Carousel as FlowbiteCarousel } from "flowbite-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  images: string[];
};

const Carousel = (props: Props) => {
  return (
    <div className="relative h-screen">
      <FlowbiteCarousel
        slideInterval={10000}
        leftControl={<ChevronLeftIcon className="text-golden-500 h-6 w-6" />}
        rightControl={<ChevronRightIcon className="text-golden-500 h-6 w-6" />}
      >
        {props.images.map((image, index) => (
          <div className="relative" key={index}>
            <img
              className="h-auto w-full"
              src={image}
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-700 to-transparent"></div>
          </div>
        ))}
      </FlowbiteCarousel>
      {/* Heading and Buttons */}
      <div className="flext-start absolute left-8 top-1/2 flex flex-col gap-10 p-8 pr-96 text-slate-100">
        <h1 className="mb-4 text-lg md:text-2xl">
          Welcome to Snap Stay, where luxury meets comfort in the heart of
          Toronto. Our elegant rooms, exquisite dining, and personalized service
          ensure a memorable stay.
        </h1>
        <div className="flex gap-2">
          <button className="bg-golden-500 hover:bg-golden-800 rounded px-4 py-2 font-bold text-slate-100">
            Book Now
          </button>
          <button className="text-golden-500 rounded border border-white bg-transparent px-4 py-2 font-bold hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
