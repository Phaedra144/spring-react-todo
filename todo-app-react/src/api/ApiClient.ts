import axios from 'axios';
export const BASE_URL = 'http://localhost:8080/api/v1';
export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
