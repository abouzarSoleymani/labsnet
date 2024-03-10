import api from '@/api';

export const getTechnicalAssistantList = async (
  params: any,
  page: number
): Promise<any> => {
  return api.get<any>(
    `technical-assistant/services/equipments?page_size=${10}&page=${page}`,
    {
      params,
    }
  );
};

export const getEquipmentDetail = async (
  equipmentId: string,
  serviceId: string
): Promise<any> => {
  return api.get<any>(
    `technical-assistant/services/equipment/${equipmentId}?serviceId=${serviceId}`
  );
};

export const getEquipmentFieldActivity = async (params: any): Promise<any> => {
  return api.get<any>(`technical-assistant/services/equipment-field-activity`, {
    params,
  });
};
export const getServiceDetail = async (serviceId: string): Promise<any> => {
  return api.get<any>(`technical-assistant/services/${serviceId}`, {
    params: {
      type: 'web',
    },
  });
};
