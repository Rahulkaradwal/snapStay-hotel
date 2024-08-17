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
      className="flex w-full justify-between border-b-2 border-golden-800 bg-dark p-2 text-slate-50 md:p-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={container}
    >
      <FooterItems icon={<CiStar />} title="Offers" />
      <FooterItems icon={<FaGift />} title="Vouchers" />
      <FooterItems icon={<PiChefHatDuotone />} title="Cuisines" />
      <FooterItems icon={<PiFlowerLotusLight />} title="Sauna world" />
    </motion.div>
  );
}

export default DescriptionFooter;
