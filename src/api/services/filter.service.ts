import api from '@/api';

export const getFieldActivities = async (): Promise<any> => {
  return api.get<any>(`technical-assistant/base-information/field-activity`);
};

export const getTechnologyField = async (): Promise<any> => {
  return api.get<any>(`technical-assistant/base-information/technology-field`);
};

export const getUsageService = async (): Promise<any> => {
  return api.get<any>(`technical-assistant/base-information/usage-service`);
};
