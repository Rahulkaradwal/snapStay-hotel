import { motion } from "framer-motion";

function DescriptionHeader() {
  return (
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
        The suite comprises a spacious living room-bedroom combo with double bed
        and sofa bed, a bathroom with shower and separate toilet with bidet, and
        a wellness terrace with relaxation lounger. The suites enjoy partially
        an open view of the lake. Underground parking is included.
      </p>
    </motion.div>
  );
}

export default DescriptionHeader;
