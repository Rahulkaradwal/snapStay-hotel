import { motion } from "framer-motion";
import Item from "./Item";

const MenuItems = () => {
  return (
    <motion.div className="bg-slate-50 p-16">
      <Item />
      <Item />
      <Item />
    </motion.div>
  );
};

export default MenuItems;
