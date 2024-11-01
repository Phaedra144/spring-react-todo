import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';

export const Logout = () => {
  const authContext = useAuth();
  authContext.logout();

  return (
    <div>
      <h1>You are logged out!</h1>
      <p>See you later</p>
      <Link to="/login">Login</Link>
    </div>
  );
};
