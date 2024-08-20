import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex h-screen justify-center bg-auth-cover bg-cover pt-20 align-middle">
        <motion.div className="absolute inset-0 bg-gradient-to-b from-dark to-transparent"></motion.div>
        <div className="z-10 mt-20 flex flex-col gap-12 text-center text-2xl text-slate-50">
          <motion.p
            className="font-serif text-6xl sm:text-4xl md:text-8xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: -150 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            404
          </motion.p>
          <motion.p
            className="text-xl font-semibold sm:text-2xl md:text-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: +150 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Oops! The page you're looking for doesn't exist.
          </motion.p>
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
            <button
              onClick={() => navigate("/")}
              className="hover:text-slatduration-300 cursor-pointer rounded-sm bg-golden-800 p-2 text-sm font-bold text-black transition-all duration-300 hover:text-slate-50 md:text-xl"
            >
              Go Back Home
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
