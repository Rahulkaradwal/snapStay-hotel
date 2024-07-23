import { motion } from "framer-motion";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineCleanHands, MdRoofing } from "react-icons/md";
import { PiCouch } from "react-icons/pi";
import { TbParkingCircle } from "react-icons/tb";
const EquipmentFlex = "flex items-center  gap-2 justify-between";
const iconClass = "text-xl text-golden-800";

function DescriptionIcons() {
  return (
    <div className="pr-20">
      <h1 className="text-2xl text-golden-800">Eqiupment</h1>
      <motion.div
        className="text-md mt-10 flex flex-wrap justify-between gap-6 align-middle"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.75 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className={EquipmentFlex}>
          <IoBedOutline className={iconClass} />
          <p>Large Bed</p>
        </div>
        <div className={EquipmentFlex}>
          <PiCouch className={iconClass} />
          <p>Pull-out Couch</p>
        </div>
        <div className={EquipmentFlex}>
          <MdRoofing className={iconClass} />
          <p>Private Terrace</p>
        </div>
        <div className={EquipmentFlex}>
          <TbParkingCircle className={iconClass} />
          <p>Underground Parking</p>
        </div>
        <div className={EquipmentFlex}>
          <MdOutlineCleanHands className={iconClass} />
          <p>Wellness</p>
        </div>
      </motion.div>
    </div>
  );
}

export default DescriptionIcons;
