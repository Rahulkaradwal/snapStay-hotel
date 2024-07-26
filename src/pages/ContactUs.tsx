import { motion } from "framer-motion";

function ContactUs() {
  return (
    <>
      <section className="flex h-screen justify-center bg-auth-cover bg-cover pt-20 align-middle">
        <motion.div className="absolute inset-0 bg-gradient-to-b from-dark to-transparent"></motion.div>
        <div className="z-50 mt-20 flex flex-col gap-12 text-center text-2xl text-slate-50">
          <p className="-rotate-6 font-serif text-7xl">BONJOUR</p>
          <div className="flex justify-evenly gap-6">
            <p className="text-6xl font-semibold text-slate-50">hola</p>
            <p className="rotate-6 rounded-sm bg-dark p-3 font-mono text-6xl text-golden-800">
              HELLO
            </p>
          </div>
          <p>Got a question? Send us a message and we'll get back to you!</p>
          <div>
            <span className="dura hover:text-slatduration-300 cursor-pointer rounded-sm bg-golden-800 p-4 text-xl font-bold text-black transition-all duration-300 hover:text-slate-50">
              Write us a message
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
