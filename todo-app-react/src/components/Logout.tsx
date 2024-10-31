import React from 'react';
import { Link } from 'react-router-dom';

export const Logout = () => {
  return (
    <div>
      <h1>You are logged out!</h1>
      <p>See you later</p>
      <Link to="/login">Login</Link>
    </div>
  );
};
