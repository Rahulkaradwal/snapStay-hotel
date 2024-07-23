import { motion } from "framer-motion";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineCleanHands, MdRoofing } from "react-icons/md";
import { PiCouch } from "react-icons/pi";
import { TbParkingCircle } from "react-icons/tb";

const EquipmentFlex = "flex items-center  gap-2 justify-between";
const iconClass = "text-xl text-golden-800";

const Description = () => {
  return (
    <section className="bg-gray-900">
      <div className="flex h-fit w-[70%] flex-col justify-start gap-20 p-20 text-slate-50">
        <motion.div
          className="pr-20"
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
        <div className="pr-20">
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

        <div>
          <h1 className="text-2xl text-golden-800">Impressions</h1>
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="row-span-2 h-full">
              <img
                className="h-full w-full object-cover"
                src="/rooms/asthetic-room.jpg"
                alt="img"
              />
            </div>
            <div className="h-56">
              <img
                className="h-full w-full object-cover"
                src="/rooms/lobby-sofa.jpg"
                alt="img"
              />
            </div>
            <div className="h-56">
              <img
                className="h-full w-full object-cover"
                src="/rooms/beachview.jpg"
                alt="img"
              />
            </div>
            <div className="col-span-2 h-56">
              <img
                className="h-full w-full object-cover"
                src="/rooms/outdoor.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
