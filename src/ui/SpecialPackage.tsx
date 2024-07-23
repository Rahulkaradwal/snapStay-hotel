import { motion } from "framer-motion";
import SlickCarousel from "./SlickCarousel";

const SpecialPackage = () => {
  return (
    <section className="grid h-screen grid-cols-[1.5fr_2fr] content-center gap-16 bg-special-package bg-cover px-8 align-middle text-golden-800">
      <motion.div
        className="flex flex-col gap-12 p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.75 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="text-sm md:text-3xl">
          Packages for pure joy on holiday
        </h1>
        <p className="text-sm text-slate-50 md:text-lg">
          We have put together an array of packages tailored to bring you pure
          joy on holiday. Take a look at our list of offers and book your
          long-awaited stay.
        </p>
      </motion.div>
      <div className="h-[36rem] w-[60rem] rounded-xl p-2 backdrop-blur-sm">
        <SlickCarousel />
      </div>
    </section>
  );
};

export default SpecialPackage;
