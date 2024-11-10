import React, { createContext, ReactNode, useContext, useState } from 'react';
import { apiClient } from '../api/ApiClient';
import { executeJwtAuthenticationService } from '../api/AuthenticationApiService';

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

  const logout = () => {
    setIsError(false);
    setIsAuthenticated(false);
    setUserName(null);
  };

  // const login = async (
  //   userName: string,
  //   password: string
  // ): Promise<boolean> => {
  //   const baToken = 'Basic ' + window.btoa(userName + ':' + password);

  //   try {
  //     const response = await executeBasicAuthentication(baToken);

  //     if (response.status === 200) {
  //       setIsAuthenticated(true);
  //       setUserName(userName);
  //       apiClient.interceptors.request.use((config) => {
  //         config.headers.Authorization = baToken;
  //         return config;
  //       });
  //       return true;
  //     } else {
  //       logout();
  //       setIsError(true);
  //       return false;
  //     }
  //   } catch (error) {
  //     logout();
  //     setIsError(true);
  //     return false;
  //   }
  // };

  const login = async (
    userName: string,
    password: string
  ): Promise<boolean> => {
    try {
      const response = await executeJwtAuthenticationService(
        userName,
        password
      );

      if (response.status === 200) {
        const jwtToken = 'Bearer ' + response.data.token;
        setIsAuthenticated(true);
        setUserName(userName);
        apiClient.interceptors.request.use((config) => {
          config.headers.Authorization = jwtToken;
          return config;
        });
        return true;
      } else {
        logout();
        setIsError(true);
        return false;
      }
    } catch (error) {
      logout();
      setIsError(true);
      return false;
    }
  };

  const authData = {
    isAuthenticated,
    logout,
    login,
    isError,
    userName: userName || '',
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}
