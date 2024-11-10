import axios from 'axios';
export const BASE_URL = 'http://localhost:8080';
export const apiClient = axios.create({
  baseURL: BASE_URL + '/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
