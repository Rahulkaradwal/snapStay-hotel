import { motion } from "framer-motion";

function ContactUs() {
  return (
    <>
      <section className="flex h-screen justify-center bg-auth-cover bg-cover pt-20 align-middle">
        <motion.div className="absolute inset-0 bg-gradient-to-b from-dark to-transparent"></motion.div>
        <div className="z-50 mt-20 flex flex-col gap-12 text-center text-2xl text-slate-50">
          <motion.p
            className="-rotate-6 font-serif text-7xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: -150 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            BONJOUR
          </motion.p>
          <div className="flex justify-evenly gap-6">
            <motion.p
              className="text-6xl font-semibold text-slate-50"
              animate={{
                scale: [1, 1, 1, 0.5, 1],
                rotate: [340, 0, 270, 360, 340],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            >
              hola
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: +150 },
                visible: { opacity: 1, x: 0 },
              }}
              className="rotate-6 rounded-sm bg-dark p-3 font-mono text-6xl text-golden-800"
            >
              HELLO
            </motion.p>
          </div>
          <p>Got a question? Send us a message and we'll get back to you!</p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 150 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="dura hover:text-slatduration-300 cursor-pointer rounded-sm bg-golden-800 p-4 text-xl font-bold text-black transition-all duration-300 hover:text-slate-50">
              Write us a message
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
