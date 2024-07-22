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
        leftControl={<ChevronLeftIcon className="h-6 w-6 text-golden-500" />}
        rightControl={<ChevronRightIcon className="h-6 w-6 text-golden-500" />}
      >
        {props.images.map((image, index) => (
          <div className="relative" key={index}>
            <img
              className="h-auto w-full"
              src={image}
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-transparent"></div>
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
          <button className="rounded bg-golden-500 px-4 py-2 font-bold text-slate-100 hover:bg-golden-800">
            Book Now
          </button>
          <button className="rounded border border-white bg-transparent px-4 py-2 font-bold text-golden-500 hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
