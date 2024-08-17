import { Link } from "react-router-dom";
import logo from "/logo-no-background.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { IoLogOut } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";

type HeaderProps = {
  isTopOfPage: boolean;
};

const Header = ({ isTopOfPage }: HeaderProps) => {
  const { isAuthenticated, logout } = useAuth();

  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const flexClass = "md:flex md:gap-12 md:items-center";
  const isAboveScreen = useMediaQuery("(min-width: 1060px)");
  const headerBackground = isTopOfPage
    ? " "
    : "bg-zinc-900 opacity-50 drop-shadow-lg";

  return (
    <nav>
      <div
        className={`${flexClass} flex justify-between ${headerBackground} fixed top-0 z-50 w-screen p-2 px-4 text-slate-100 md:w-full md:px-20`}
      >
        <img src={logo} alt="logo" className="w-16 md:w-28" />
        <div className="pointer-events-none absolute inset-0 drop-shadow-lg"></div>
        {isAboveScreen ? (
          <div className={`${flexClass} relative z-10 gap-16 text-xl`}>
            <Link
              className="transition duration-500 hover:text-golden-500"
              to="/"
            >
              Home
            </Link>

            <Link
              className="transition duration-500 hover:text-golden-500"
              to="/rooms"
            >
              Rooms
            </Link>

            <div className={flexClass}>
              {isAuthenticated ? (
                <>
                  <Link
                    className="transition duration-500 hover:text-golden-500"
                    to="/booking"
                  >
                    Bookings
                  </Link>
                  <button
                    className="flex cursor-pointer items-center gap-2 transition-all duration-300 hover:text-golden-800"
                    onClick={logout}
                  >
                    Logout
                    <IoLogOut className="text-3xl" />
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Register</Link>
                </>
              )}
            </div>
          </div>
        ) : (
          <button
            className="bg-secondary-500 relative z-10 rounded-full p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Bars3Icon className="h-6 w-6 text-golden-500" />
          </button>
        )}
      </div>

      {/* mobile menu modal */}
      {!isAboveScreen && isMenuToggled && (
        <div className="fixed inset-0 z-40 h-screen w-screen">
          {/* overlay */}
          <div className="absolute inset-0 bg-black opacity-80"></div>
          {/* menu content */}
          <div className="relative z-50">
            {/* close icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-slate-100" />
              </button>
            </div>
            {/* mobile menu */}
            <div className="flex flex-col items-end gap-10 pr-12 text-2xl text-slate-100">
              {isAuthenticated ? (
                <button
                  className="flex cursor-pointer items-center gap-2 transition-all duration-300 hover:text-golden-800"
                  onClick={logout}
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMenuToggled(false)}>
                    Login
                  </Link>
                  <Link to="/signup" onClick={() => setIsMenuToggled(false)}>
                    Register
                  </Link>
                </>
              )}
              <Link to="/" onClick={() => setIsMenuToggled(false)}>
                Home
              </Link>
              <Link to="/rooms" onClick={() => setIsMenuToggled(false)}>
                Rooms
              </Link>
              {isAuthenticated && (
                <Link to="/booking" onClick={() => setIsMenuToggled(false)}>
                  Bookings
                </Link>
              )}
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
