import { Carousel as FlowbiteCarousel } from "flowbite-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  images: string[];
};

const Carousel = (props: Props) => {
  return (
    <FlowbiteCarousel
      slideInterval={10000}
      leftControl={<ChevronLeftIcon className="h-6 w-6 text-white" />}
      rightControl={<ChevronRightIcon className="h-6 w-6 text-white" />}
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
  );
};

export default Carousel;
