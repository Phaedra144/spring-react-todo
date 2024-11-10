import { apiClient, authClient } from './ApiClient';

export const executeBasicAuthentication = (token: string) => {
  return apiClient.get(`/basicauth`, {
    headers: {
      Authorization: token,
    },
  });
};

export const executeJwtAuthenticationService = (
  userName: string,
  password: string
) => {
  return authClient.post(`/authenticate`, {
    userName,
    password,
  });
};
