import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

function ImageGrid() {
  return (
    <div>
      <h1 className="text-2xl text-golden-800">Impressions</h1>
      <motion.div
        className="mt-10 grid grid-cols-3 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        <motion.div variants={childVariant} className="row-span-2 h-full">
          <img
            className="h-full w-full object-cover"
            src="/rooms/asthetic-room.jpg"
            alt="img"
          />
        </motion.div>
        <motion.div variants={childVariant} className="h-56">
          <img
            className="h-full w-full object-cover"
            src="/rooms/lobby-sofa.jpg"
            alt="img"
          />
        </motion.div>
        <motion.div variants={childVariant} className="h-56">
          <img
            className="h-full w-full object-cover"
            src="/rooms/beachview.jpg"
            alt="img"
          />
        </motion.div>
        <motion.div variants={childVariant} className="col-span-2 h-56">
          <img
            className="h-full w-full object-cover"
            src="/rooms/outdoor.jpg"
            alt="img"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ImageGrid;
