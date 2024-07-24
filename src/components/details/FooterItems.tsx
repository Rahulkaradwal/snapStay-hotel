import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
  icon: JSX.Element;
  title: string;
  link?: string;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const FooterItems = ({ icon, title, link }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="flex w-60 flex-col items-center gap-4 rounded-md border border-golden-100 p-4 text-center text-slate-50"
    >
      <span className="flex h-16 items-center justify-center rounded-full bg-golden-800 p-4 text-3xl text-slate-50">
        {icon}
      </span>
      <h1>{title}</h1>
      <Link to={link || "#"}>Learn more</Link>
    </motion.div>
  );
};

export default FooterItems;
