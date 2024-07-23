import { motion } from "framer-motion";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineCleanHands, MdRoofing } from "react-icons/md";
import { PiCouch } from "react-icons/pi";
import { TbParkingCircle } from "react-icons/tb";

const EquipmentFlex = "flex items-center  gap-2 justify-between";
const iconClass = "text-xl text-golden-800";

const Description = () => {
  return (
    <section className="h-screen bg-gray-900">
      <div className="flex h-fit w-[58%] flex-col justify-start gap-20 p-20 text-slate-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.75 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-2xl text-golden-800"> Descritpion</h1>
          <p className="text-md mt-10">
            The suite comprises a spacious living room-bedroom combo with double
            bed and sofa bed, a bathroom with shower and separate toilet with
            bidet, and a wellness terrace with relaxation lounger. The suites
            enjoy partially an open view of the lake. Underground parking is
            included.
          </p>
        </motion.div>
        <div>
          <h1 className="text-2xl text-golden-800">Eqiupment</h1>
          <div className="text-md mt-10 flex flex-wrap justify-between gap-6 align-middle">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
