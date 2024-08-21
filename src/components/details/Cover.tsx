import { motion } from "framer-motion";
import { CabinResponse } from "../../api/types";
type Props = {
  data: CabinResponse;
};
const Cover = ({ data }: Props) => {
  return (
    <section className="relative h-screen bg-default-detail-cover bg-cover">
      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
      <motion.div
        className="absolute bottom-20 left-3 flex flex-col gap-4 rounded-md p-10 text-white shadow-2xl shadow-golden-100 md:bottom-10 md:left-10 md:w-1/3 md:bg-ligthDark/85 md:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <span className="text-golden-800">Suites</span>
        <h1 className="w-fit bg-golden-800 p-3 font-semibold text-black shadow-2xl transition-all duration-200 md:text-xl">
          {data.name}
        </h1>
        <p className="md:text-xl">
          Regular Price: ${data.regularPrice + data.discount}
        </p>
        <p className="md:text-xl">Applied Discount : {data.discount} $</p>
        <p className="md:text-xl"> Total Price: ${data.regularPrice}</p>

        <div className="text-xl">Capacity: for {data.maxCapacity} guests</div>
      </motion.div>
    </section>
  );
};

export default Cover;
