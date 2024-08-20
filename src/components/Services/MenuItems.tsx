import { motion } from "framer-motion";
import Item from "./Item";

const MenuItems = () => {
  return (
    <motion.div className="bg-dark p-4 text-slate-100 md:p-16">
      <Item
        title="Comfortable Modern Accommodations"
        description="Experience unparalleled comfort in our modern accommodations,
          featuring contemporary design, plush bedding, and state-of-the-art
          amenities. Enjoy a relaxing stay with all the conveniences you need
          for a perfect getaway."
        image={"/card/room2.jpg"}
      />
      <Item
        title="Spa & Fitness Center"
        image={"/services/spa.jpg"}
        description="Indulge in relaxation and wellness at our Spa & Fitness Center. Enjoy soothing spa treatments and a fully equipped gym, offering the perfect blend of rejuvenation and fitness."
      />
      <Item
        title="Laundry & Dry Cleaning"
        description="Enjoy convenient and efficient laundry services, ensuring your clothes are fresh and clean throughout your stay. We offer professional care for all your garments, allowing you to focus on your relaxation."
        image={"/services/laundry.jpg"}
      />
    </motion.div>
  );
};

export default MenuItems;
