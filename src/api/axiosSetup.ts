import type {
  AxiosError,
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';

import { generateApiKey } from '@/utils/helper';

// We can use the following function to inject the JWT token through an interceptor
const injectToken = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  try {
    const token = localStorage.getItem('accessToken');

    if (token != null) {
      (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
    } else {
      (config.headers as AxiosHeaders).set(
        'Authorization',
        `apikey ${generateApiKey()}`
      );
    }
    return config;
  } catch (error: any) {
    throw new Error(error);
  }
};
const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  // Set Loading Start Here
  injectToken(config);
  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  // Set Loading End Here
  // Handle Response Data Here
  return response;
};

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  // const { message } = (error as AxiosError) ?? '';
  const { status } = error as AxiosError;

  switch (status) {
    case 401: {
      // "Login required"
      localStorage.removeItem('accessToken');
      window.location.href = '/';
      break;
    }
    case 403: {
      break;
    }
    case 404: {
      // "Invalid request"
      break;
    }
    case 500: {
      // "Server error"
      break;
    }
    default: {
      // "Unknown error occurred"
      break;
    }
  }

  return Promise.reject(error);
};
const initialization = (config: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create(config);

  axiosInstance.interceptors.request.use(onRequest, onErrorResponse);
  axiosInstance.interceptors.response.use(onResponse, onErrorResponse);

  return axiosInstance;
};

// Request Interceptor

export default initialization;
