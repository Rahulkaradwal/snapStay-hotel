import React, { createContext, useContext, useEffect, useState } from "react";
import getCurrentTime from "../utils/getTime";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AuthContextProps extends AuthState {
  loginCtx: (token: string, expirationTime: number) => void;
  logout: () => void;
  authChecker: () => boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Helper function to check if token is expired
const isTokenExpired = (expiration: number | null) => {
  if (!expiration) return true;
  return getCurrentTime() > expiration;
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Set token from local storage or null
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("TOKEN_KEY"),
  );

  // Set expiration time from local storage or null
  const [expirationTime, setExpirationTime] = useState<number | null>(() => {
    const storedValue = localStorage.getItem("EXPIRATION_TIME");
    return storedValue ? parseInt(storedValue, 10) : null;
  });

  // Define a state to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Function to check if token is expired
  const authChecker = () => {
    return token !== null && !isTokenExpired(expirationTime);
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("TOKEN_KEY");
    localStorage.removeItem("EXPIRATION_TIME");
  };

  useEffect(() => {
    if (token && !isTokenExpired(expirationTime)) {
      setIsAuthenticated(true);
    } else {
      logout();
    }
  }, [token, expirationTime]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("TOKEN_KEY", token);
    }
  }, [token]);

  const loginCtx = (newToken: string, expiration: number) => {
    setToken(newToken);
    setExpirationTime(expiration);
    setIsAuthenticated(true);
    localStorage.setItem("TOKEN_KEY", newToken);
    localStorage.setItem("EXPIRATION_TIME", expiration.toString());
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        authChecker,
        setIsAuthenticated,
        isAuthenticated,
        loginCtx,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  // Optionally, re-check isTokenExpired here if real-time checks are critical
  return context;
}

export { AuthProvider, useAuth };
