import axios from 'axios';
import { CurrentUser } from '../interfaces/user.inteface';

const fetcher = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    TokenCybersoft: import.meta.env.VITE_TOKEN_CYBERSOFT,
  },
});

fetcher.interceptors.request.use((config: any) => {
  const user = JSON.parse(localStorage.getItem('currentUser') || '{}') as CurrentUser;
  if (user) {
    config.headers['Authorization'] = `Bearer ${user.accessToken}`;
  }
  return config;
});

export default fetcher;
