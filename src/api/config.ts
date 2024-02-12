import { AxiosRequestConfig } from 'axios';

const headers: Record<string, string | boolean> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': true,
  'X-Requested-With': 'XMLHttpRequest',
};

export const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  responseType: 'json',
  ...headers,
};
