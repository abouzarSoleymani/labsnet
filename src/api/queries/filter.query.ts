'use client';

import { useQuery } from '@tanstack/react-query';

import {
  getFieldActivities,
  getTechnologyField,
  getUsageService,
} from '@/api/services/filter.service';
import {
  QUERY_FIELD_ACTIVITY_KEY,
  QUERY_TECHNOLOGY_FIELD_KEY,
  QUERY_USAGE_SERVICE_KEY,
} from '@/constants/query.constant';

export const useGetFieldActivityQuery = () =>
  useQuery({
    queryKey: [QUERY_FIELD_ACTIVITY_KEY],
    queryFn: () => getFieldActivities().then(res => res.data),
    staleTime: 20000,
  });

export const useGetTechnologyFieldQuery = () =>
  useQuery({
    queryKey: [QUERY_TECHNOLOGY_FIELD_KEY],
    queryFn: () => getTechnologyField().then(res => res.data),
    staleTime: 20000,
  });
export const useGetUsageServiceQuery = () =>
  useQuery({
    queryKey: [QUERY_USAGE_SERVICE_KEY],
    queryFn: () => getUsageService().then(res => res.data),
    staleTime: 20000,
  });
