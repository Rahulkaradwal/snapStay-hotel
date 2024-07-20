import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
