import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import { useEffect, useState } from "react";

const AppLayout = () => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div>
      <Header isTopOfPage={isTopOfPage} />
      <Outlet />
    </div>
  );
};

export default AppLayout;
