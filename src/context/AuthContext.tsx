import React, { createContext, useContext, useEffect, useState } from "react";
import getCurrentTime from "../utils/getTime";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

interface AuthContextProps extends AuthState {
  loginCtx: (token: string, expirationTime: number) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const isTokenExpired = (expiration: number | null) => {
  if (!expiration) {
    return true;
  }
  return Number(getCurrentTime()) > expiration;
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("TOKEN_KEY"),
  );

  const [isAuthenticated, setIsAuthenticated] =
    useState<boolean>(!isTokenExpired);

  useEffect(() => {
    if (isAuthenticated && token) {
      localStorage.setItem("TOKEN_KEY", token);
    }
  }, [token, isAuthenticated]);
  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.removeItem("TOKEN_KEY");
      localStorage.removeItem("EXPIRATION_TIME");
    }
  }, [isAuthenticated]);

  const loginCtx = (newToken: string, expiration: number) => {
    console.log(newToken, expiration);
    setToken(newToken);
    setIsAuthenticated(true);
    localStorage.setItem("TOKEN_KEY", newToken);
    localStorage.setItem("EXPIRATION_TIME", expiration.toString());
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("TOKEN_KEY");
    localStorage.removeItem("EXPIRATION_TIME");
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, loginCtx, logout }}>
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
