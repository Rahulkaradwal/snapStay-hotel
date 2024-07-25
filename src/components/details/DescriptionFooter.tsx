import { CiStar } from "react-icons/ci";
import { FaGift } from "react-icons/fa";
import { PiChefHatDuotone, PiFlowerLotusLight } from "react-icons/pi";
import FooterItems from "./FooterItems";
import { motion } from "framer-motion";
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

function DescriptionFooter() {
  return (
    <motion.div
      className="bg-dark flex w-full justify-between border-b-2 border-golden-800 p-10 text-slate-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={container}
    >
      <FooterItems icon={<CiStar />} title="Offers" link="/booking" />
      <FooterItems icon={<FaGift />} title="Vouchers" link="/booking" />
      <FooterItems
        icon={<PiChefHatDuotone />}
        title="Cuisines"
        link="/booking"
      />
      <FooterItems
        icon={<PiFlowerLotusLight />}
        title="water & sauna world"
        link="/booking"
      />
    </motion.div>
  );
}

export default DescriptionFooter;
