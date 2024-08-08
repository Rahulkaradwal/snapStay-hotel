import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const slides = [
  {
    img: "/card/room2.jpg",
    title: "4=3 Special - High Season",
    description: "4 nighst from $870.00 per person",
  },
  {
    img: "/card/room3.jpg",
    title: "4=3 Special - High Season",
    description: "4 nighst from $870.00 per person",
  },
  {
    img: "/card/room1.jpg",
    title: "4=3 Special - High Season",
    description: "4 nighst from $870.00 per person",
  },
];

const SlickCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,

    speed: 1000,
    mobileFirst: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <motion.div className="p-4" variants={container}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Card key={index} slide={slide} />
        ))}
      </Slider>
    </motion.div>
  );
};

export default SlickCarousel;
