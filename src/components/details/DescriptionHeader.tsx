import { motion } from "framer-motion";
type Props = {
  description: string;
};
function DescriptionHeader({ description }: Props) {
  return (
    <motion.div
      className="md:pr-20"
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
      <p className="text-md mt-10">{description}</p>
    </motion.div>
  );
}

export default DescriptionHeader;
