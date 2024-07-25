import { motion } from "framer-motion";

const Cover = () => {
  return (
    <section className="relative h-screen bg-default-detail-cover bg-cover">
      <div className="from-dark absolute inset-0 bg-gradient-to-t to-transparent"></div>
      <motion.div
        className="absolute bottom-40 left-20 flex w-1/3 flex-col gap-4 p-6 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <span className="xl text-golden-800">Suites</span>
        <h1 className="text-4xl">Suite Name</h1>
        <p>for 2-4 people, 60 m2 descrition</p>

        <div>2 guests</div>
      </motion.div>
    </section>
  );
};

export default Cover;
