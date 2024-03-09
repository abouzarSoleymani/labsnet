import api from '@/api';

export const getCaptcha = async (): Promise<any> => {
  return api.post<any>(`technical-assistant/captcha`, {});
};
export const login = async (data: any): Promise<any> => {
  return api.post<any>(`technical-assistant/users/login`, data);
};
