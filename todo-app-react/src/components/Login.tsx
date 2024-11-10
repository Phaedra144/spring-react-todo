import React, { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';

export const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const authContext = useAuth();

  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (await authContext.login(userName, password)) {
      navigate('/welcome/' + userName);
    }
  };

  return (
    <div>
      {authContext.isError && (
        <div className="errorMessage">
          Authentication failed, please check your credentials
        </div>
      )}
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <label className="m-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={handleChangeUserName}
          />
        </div>
        <div>
          <label className="m-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div className="m-3">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
