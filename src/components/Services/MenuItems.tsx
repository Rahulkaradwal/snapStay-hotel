import { motion } from "framer-motion";
import Item from "./Item";

const MenuItems = () => {
  return (
    <motion.div className="bg-dark p-4 text-slate-100 md:p-16">
      <Item />
      <Item />
      <Item />
    </motion.div>
  );
};

export default MenuItems;
