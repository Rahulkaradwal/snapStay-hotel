import { motion } from "framer-motion";

const Cover = () => {
  return (
    <section className="relative h-[85vh] bg-service-background bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-transparent"></div>
      <motion.div
        className="flex h-[85vh] items-end justify-center p-6 pb-20 text-white backdrop-blur-sm md:relative md:grid md:content-center md:gap-16 md:pl-20 md:pr-72 md:text-2xl md:leading-8"
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
