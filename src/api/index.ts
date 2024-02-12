import type { AxiosRequestConfig } from 'axios';

import initializeAxios from './axiosSetup';
import { axiosRequestConfiguration } from './config';

const axiosInstance = initializeAxios(axiosRequestConfiguration);

const get = <T = any, R = T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<R> => {
  return axiosInstance
    .get<T, R>(url, config)
    .then((response: any) => response.data);
};

const post = <T = any, R = T>(
  url: string,
  body?: T,
  config?: AxiosRequestConfig
): Promise<R> => {
  return axiosInstance
    .post<T, R>(url, body, config)
    .then((response: any) => response.data);
};

const put = <T = any, R = T>(
  url: string,
  body?: T,
  config?: AxiosRequestConfig
): Promise<R> => {
  return axiosInstance
    .put<T, R>(url, body, config)
    .then((response: any) => response.data);
};

const patch = <T = any, R = T>(
  url: string,
  body?: T,
  config?: AxiosRequestConfig
): Promise<R> => {
  return axiosInstance
    .patch<T, R>(url, body, config)
    .then((response: any) => response.data);
};

const remove = <T = any, R = T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<R> => {
  return axiosInstance
    .delete<T, R>(url, config)
    .then((response: any) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { get, post, put, patch, delete: remove };
