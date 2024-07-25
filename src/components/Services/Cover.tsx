import { motion } from "framer-motion";

const Cover = () => {
  return (
    <section className="relative h-[85vh] bg-service-background bg-cover">
      <div className="from-dark absolute inset-0 bg-gradient-to-b to-transparent"></div>
      <motion.div
        className="relative grid h-[85vh] content-center gap-16 pl-20 pr-72 text-2xl leading-8 text-white backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        Welcome to SnapStay! Enjoy luxurious rooms, gourmet dining, a
        state-of-the-art fitness center, and a rejuvenating spa. Our 24/7
        concierge ensures personalized service. Stay connected with free Wi-Fi
        and take advantage of our business facilities and complimentary shuttle.
        Experience exceptional hospitality and comfort with us.
      </motion.div>
    </section>
  );
};

export default Cover;
