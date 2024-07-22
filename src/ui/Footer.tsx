import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const socialIcons =
    "text-2xl text-white hover:text-golden-500 transition duration-500 cursor-pointer hover:scale-125";
  return (
    <section className="flex items-center justify-between bg-zinc-900 p-8 text-golden-800">
      <div className="flex flex-col items-center gap-4 p-4">
        <img className="w-24" src={"/logo-no-background.svg"} alt="logo" />
        <div className="flex gap-4">
          <FaGithub className={socialIcons} />
          <FaInstagram className={socialIcons} />
          <FaLinkedinIn className={socialIcons} />
        </div>
      </div>
      <div className="">Services</div>
      <div className="">About</div>
      <div className="">Our Projects</div>
      <div className="">Address</div>
    </section>
  );
};

export default Footer;
