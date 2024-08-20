import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element;
  title: string;
  link?: string;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const FooterItems = ({ icon, title }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="flex flex-col items-center gap-4 rounded-md border border-golden-100 p-4 text-center text-slate-50 md:w-60"
    >
      <span className="flex items-center justify-center rounded-full bg-golden-800 p-2 text-xs text-slate-50 md:h-16 md:w-16 md:text-3xl">
        {icon}
      </span>
      <h1 className="text-[0.50rem] font-semibold md:text-lg">{title}</h1>
    </motion.div>
  );
};

export default FooterItems;
