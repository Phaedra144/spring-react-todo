import React, { createContext, ReactNode, useContext, useState } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

    const authData = {
      isAuthenticated,
      setIsAuthenticated,
      logout,
    };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}
