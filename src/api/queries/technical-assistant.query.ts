import { useQuery } from '@tanstack/react-query';

import {
  getEquipmentDetail,
  getEquipmentFieldActivity,
  getServiceDetail,
  getTechnicalAssistantList,
} from '@/api/services/technical-assistant.service';
import {
  QUERY_EQUIPMENT_DETAIL_KEY,
  QUERY_EQUIPMENT_FIELD_ACTIVITY_KEY,
  QUERY_SERVICE_DETAIL_KEY,
  QUERY_TECHNICAL_ASSISTANT_KEY,
} from '@/constants/query.constant';

export const useGetTechnicalAssistantQuery = (params: any, page: number) =>
  useQuery({
    queryKey: [QUERY_TECHNICAL_ASSISTANT_KEY],
    queryFn: () =>
      getTechnicalAssistantList(params, page).then(res => res.data),
    staleTime: 2000,
  });

export const useGetEquipmentDetailQuery = (
  equipmentId: string,
  serviceId: string
) =>
  useQuery({
    queryKey: [QUERY_EQUIPMENT_DETAIL_KEY],
    queryFn: () =>
      getEquipmentDetail(equipmentId, serviceId).then(res => res.data),
    staleTime: 2000,
  });

export const useGetEquipmentFieldActivityQuery = (
  equipmentField: any,
  params: any
) =>
  useQuery({
    queryKey: [QUERY_EQUIPMENT_FIELD_ACTIVITY_KEY],
    queryFn: () => getEquipmentFieldActivity(params).then(res => res.data),
    enabled: !!equipmentField,
    staleTime: 2000,
  });

export const useGetServiceDetailQuery = (serviceId: string) =>
  useQuery({
    queryKey: [QUERY_SERVICE_DETAIL_KEY],
    queryFn: () => getServiceDetail(serviceId).then(res => res.data),
    staleTime: 2000,
  });
