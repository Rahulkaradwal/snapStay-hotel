import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

const AppLayout = () => {
  return (
    <div>
      <Header isTopOfPage={true} />
      <Outlet />
    </div>
  );
};

export default AppLayout;
