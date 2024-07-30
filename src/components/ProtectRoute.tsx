import { useAuth } from "../context/AuthContext";
import Login from "../pages/Login";

type Props = {
  children: React.ReactNode;
};

const ProtectRoute = ({ children }: Props) => {
  // const { isAuthenticated } = useAuth();
  // if (!isAuthenticated) {
  //   return <Login />;
  // }
  const { authChecker } = useAuth();
  if (!authChecker()) {
    return <Login />;
  }
  return children;
};

export default ProtectRoute;
