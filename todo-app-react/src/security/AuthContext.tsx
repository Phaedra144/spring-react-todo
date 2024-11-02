import React, { createContext, ReactNode, useContext, useState } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  logout: () => void;
  login: (userName: string, password: string) => boolean;
  isError: boolean;
  userName: string;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  logout: () => {},
  login: (userName: string, password: string) => false,
  isError: false,
  userName: '',
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState('');

  const logout = () => {
    setIsError(false);
    setIsAuthenticated(false);
  };

  const login = (userName: string, password: string) => {
    if (userName === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      setUserName(userName);
      return true;
    } else {
      setIsAuthenticated(false);
      setIsError(true);
      return false;
    }
  };

  const authData = {
    isAuthenticated,
    logout,
    login,
    isError,
    userName,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}
