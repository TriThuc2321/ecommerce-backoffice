import type { AxiosError } from 'axios';
import axios from 'axios';

import ENV from '@/configs/env';
import type { ICookieStore } from '@/types/auth';
import { convertObjectToCookies } from '@/utils/common';

const axiosInstance = axios.create({
  baseURL: `${ENV.API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  response => response.data,

  async (error: AxiosError) => {
    return Promise.reject(error.response?.data);
  },
);

export const setHeaderCookies = (cookieStore: ICookieStore[]) => {
  axiosInstance.defaults.headers.Cookie = convertObjectToCookies(cookieStore);
};

export default axiosInstance;
