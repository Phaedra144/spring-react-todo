import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const AuthenticatedRoute = ({ children }: { children: ReactNode }) => {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return <>{children}</>;
  }
  return <Navigate to="/login" />;
};
