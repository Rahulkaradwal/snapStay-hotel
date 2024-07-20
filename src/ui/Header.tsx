import { Link } from "react-router-dom";
import logo from "/logo-no-background.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type HeaderProps = {
  isTopOfPage: boolean;
};

const Header = ({ isTopOfPage }: HeaderProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const flexClass = "flex gap-12 items-center";
  const isAboveScreen = useMediaQuery("(min-width: 1060px)");
  const headerBackground = isTopOfPage ? "" : "bg-black drop-shadow";

  return (
    <nav>
      <div
        className={`${flexClass} justify-between ${headerBackground} fixed top-0 z-30 w-full p-8 px-20 text-slate-50`}
      >
        <img src={logo} alt="logo" className="w-28"></img>
        {isAboveScreen ? (
          <div className={`${flexClass} gap-16`}>
            <Link to="/">Home</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        ) : (
          <button
            className="bg-secondary-500 rounded-full p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        )}
      </div>

      {/* mobile menu modal */}

      {!isAboveScreen && isMenuToggled && (
        <div>
          {/* close icon */}
          <div className={`flex justify-end p-12`}>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* mobile menu */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link to="/">Home</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
