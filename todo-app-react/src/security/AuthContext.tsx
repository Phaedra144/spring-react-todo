import React, { createContext, ReactNode, useContext, useState } from 'react';
import { apiClient } from '../api/ApiClient';
import { executeBasicAuthentication } from '../api/TodoApiService';

export const AuthContext = createContext({
  isAuthenticated: false,
  logout: () => {},
  login: (userName: string, password: string) => Promise<boolean>,
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
  const [userName, setUserName] = useState<string | null>(null);
  const [token, setToken] = useState('');

  const logout = () => {
    setIsError(false);
    setIsAuthenticated(false);
  };

  const login = async (
    userName: string,
    password: string
  ): Promise<boolean> => {
    const baToken = 'Basic ' + window.btoa(userName + ':' + password);

    try {
      const response = await executeBasicAuthentication(baToken);

      if (response.status === 200) {
        setIsAuthenticated(true);
        setUserName(userName);
        setToken(baToken);
        apiClient.interceptors.request.use((config) => {
          config.headers.Authorization = baToken;
          return config;
        });
        return true;
      } else {
        setIsAuthenticated(false);
        setUserName(null);
        setIsError(true);
        return false;
      }
    } catch (error) {
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
