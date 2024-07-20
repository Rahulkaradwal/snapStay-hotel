import { Carousel as FlowbiteCarousel } from "flowbite-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  images: string[];
};

const Carousel = (props: Props) => {
  return (
    <FlowbiteCarousel
      slideInterval={5000}
      leftControl={<ChevronLeftIcon className="h-6 w-6 text-white" />}
      rightControl={<ChevronRightIcon className="h-6 w-6 text-white" />}
    >
      {props.images.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index + 1}`} />
      ))}
    </FlowbiteCarousel>
  );
};

export default Carousel;
