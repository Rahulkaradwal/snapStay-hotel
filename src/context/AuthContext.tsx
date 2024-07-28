import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

interface AuthContextProps extends AuthState {
  login: (token: string, expirationTime: Date) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const TOKEN_KEY = "token";
const EXPIRATION_KEY = "expirationTime";

const getTokenExpiration = () => {
  const expiration = localStorage.getItem(EXPIRATION_KEY);
  return expiration ? new Date(expiration) : null;
};

const isTokenExpired = (expiration: Date | null) => {
  if (!expiration) {
    return true;
  }
  return expiration.getTime() <= new Date().getTime();
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(TOKEN_KEY),
  );

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !isTokenExpired(getTokenExpiration()),
  );

  useEffect(() => {
    if (isAuthenticated && token) {
      localStorage.setItem(TOKEN_KEY, token);
    }
  }, [token, isAuthenticated]);
  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(EXPIRATION_KEY);
    }
  }, [isAuthenticated]);

  const login = (newToken: string, expiration: Date) => {
    setToken(newToken);
    setIsAuthenticated(true);
    localStorage.setItem(TOKEN_KEY, newToken);
    localStorage.setItem(EXPIRATION_KEY, expiration.toISOString());
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EXPIRATION_KEY);
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
