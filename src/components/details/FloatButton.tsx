import { motion } from "framer-motion";

import DateRangePicker from "../../ui/DateRangePicker";
import PayButtons from "./PayButtons";

type Props = {
  name: string;
  price: number;
  id: string;
};

const FloatButton = ({ name, price, id }: Props) => {
  return (
    <motion.div
      className="absolute -top-52 right-10 z-30 flex flex-col gap-6 rounded-md bg-dark px-20 py-10 text-slate-50 shadow-[0_0_50px_0px] shadow-golden-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: +150 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <DateRangePicker />
      <label className="block text-golden-800">
        <input
          type="checkbox"
          className="mr-4 cursor-pointer bg-ligthDark p-2 checked:bg-golden-800 focus:outline-golden-800"
        />
        Add BreakFast
      </label>

      <input
        type="input"
        placeholder="Number of Guests"
        className="mr-4 w-full bg-ligthDark p-2 placeholder:text-slate-50/45 focus:outline-none"
      />
      <textarea
        name="observations"
        placeholder="Add Observations"
        className="border-none bg-ligthDark p-2 placeholder:text-slate-50/45 focus:outline-none"
        id="observations"
      />
      <PayButtons id={id} />
    </motion.div>
  );
};

export default FloatButton;
