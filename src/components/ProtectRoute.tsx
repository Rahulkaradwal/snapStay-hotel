import { useAuth } from "../context/AuthContext";
import Login from "../pages/Login";

type Props = {
  children: React.ReactNode;
};

const ProtectRoute = ({ children }: Props) => {
  const { authChecker, setIsAuthenticated } = useAuth();
  if (!authChecker()) {
    setIsAuthenticated(false);
    return <Login />;
  }
  return children;
};

export default ProtectRoute;
