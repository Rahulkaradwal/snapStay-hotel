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
  const headerBackground = isTopOfPage
    ? " "
    : "bg-zinc-900 opacity-90 drop-shadow-lg";

  return (
    <nav>
      <div
        className={`${flexClass} justify-between ${headerBackground} fixed top-0 z-30 w-full p-8 px-20`}
      >
        <img src={logo} alt="logo" className="w-28" />
        <div className="pointer-events-none absolute inset-0 bg-zinc-900 opacity-30 drop-shadow-lg"></div>
        {isAboveScreen ? (
          <div
            className={`${flexClass} text-golden-500 relative z-10 gap-16 text-2xl`}
          >
            <Link to="/">Home</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        ) : (
          <button
            className="bg-secondary-500 relative z-10 rounded-full p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        )}
      </div>

      {/* mobile menu modal */}
      {!isAboveScreen && isMenuToggled && (
        <div className="fixed inset-0 z-40">
          {/* overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* menu content */}
          <div className="relative z-50">
            {/* close icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
            </div>
            {/* mobile menu */}
            <div className="flex flex-col items-center gap-10 text-2xl text-white">
              <Link to="/" onClick={() => setIsMenuToggled(false)}>
                Home
              </Link>
              <Link to="/booking" onClick={() => setIsMenuToggled(false)}>
                Booking
              </Link>
              <Link to="/services" onClick={() => setIsMenuToggled(false)}>
                Services
              </Link>
              <Link to="/contact-us" onClick={() => setIsMenuToggled(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
