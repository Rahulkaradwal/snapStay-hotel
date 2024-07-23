import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FloatButton = () => {
  return (
    <motion.div
      className="fixed bottom-10 right-10 z-30 flex flex-col gap-3 rounded-md bg-slate-700 p-10 text-slate-50 shadow-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: +150 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <h2 className="text-xl text-golden-800">Suite Name</h2>
      <h1 className="text-3xl">from $295.00</h1>
      <p>per person with pamering half board</p>
      <Link
        className="w-fit rounded-sm bg-golden-800 p-2 transition duration-500"
        to="/booking"
      >
        Book now
      </Link>
    </motion.div>
  );
};

export default FloatButton;
