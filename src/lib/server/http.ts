import { JwtType } from '@type/auth/authType';

import { LOCAL_TOKEN_KEY } from '@store/auth/authStore';

import axios from 'axios';

export const BASE_URL = 'http://78.140.241.21:8000/api';

export const http = axios.create({ baseURL: BASE_URL });

http.interceptors.request.use(async (config) => {
  try {
    const tokenString = localStorage.getItem(LOCAL_TOKEN_KEY);
    const token: JwtType = JSON.parse(tokenString || '');
    if (token) {
      config.headers!.Authorization = 'Bearer ' + token.access_token;
    }
  } catch (e) {
    console.log('DB GET TOKEN: ', e);
  }
  return config;
});
