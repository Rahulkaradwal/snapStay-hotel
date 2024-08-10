import { motion } from "framer-motion";
import Item from "./Item";

const MenuItems = () => {
  return (
    <motion.div className="bg-dark p-16 text-slate-100">
      <Item />
      <Item />
      <Item />
    </motion.div>
  );
};

export default MenuItems;
