import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const socialIcons =
    "text-2xl text-white hover:text-golden-500 transition duration-500 cursor-pointer hover:scale-125";

  const infoClass = "flex text-white flex-col gap-1";
  return (
    <section className="flex items-start justify-between bg-zinc-900 p-8 text-golden-800">
      <div className="flex flex-col items-center gap-4 p-4">
        <img className="w-36" src={"/logo-no-background.svg"} alt="logo" />
        <div className="flex gap-4">
          <FaGithub className={socialIcons} />
          <FaInstagram className={socialIcons} />
          <FaLinkedinIn className={socialIcons} />
        </div>
      </div>
      <div className={infoClass}>
        <p className="font-bold text-golden-800">Services</p>
        <p>Booking</p>
        <p>Cancellation</p>
        <p>Meals</p>
        <p>Wifi</p>
        <p>Laundry</p>
        <p>Spa</p>
        <p>Parking</p>
      </div>
      <div className={infoClass}>
        <p className="font-bold text-golden-800">About</p>
        <p>Our Team</p>
        <p>Careers</p>
        <p>FAQ</p>
      </div>
      <div className={infoClass}>
        <p className="font-bold text-golden-800">Our Projects</p>
        <p>Our Team</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <div className={infoClass}>
        <p className="font-bold text-golden-800">Address</p>
        <p>Toronto</p>
        <p>33 Dundas Street, Toronto, ON</p>
        <p>rahulkaradwal@gmail.com</p>
        <p>289-890-0869</p>
      </div>
    </section>
  );
};

export default Footer;
