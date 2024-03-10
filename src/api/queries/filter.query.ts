'use client';

import { useQueries, useQuery } from '@tanstack/react-query';

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

export const useFilterCombinedQuery = () => {
  const queries = [
    {
      queryKey: [QUERY_FIELD_ACTIVITY_KEY],
      queryFn: getFieldActivities,
      staleTime: 20000,
      select: (res: any) =>
        res.data.map(item => {
          return {
            id: item.fieldActivityId,
            name: item.name,
          };
        }),
    },
    {
      queryKey: [QUERY_TECHNOLOGY_FIELD_KEY],
      queryFn: getTechnologyField,
      staleTime: 20000,
      select: (res: any) =>
        res.data.map(item => {
          return {
            id: item.technologyFieldId,
            name: item.name,
          };
        }),
    },
    {
      queryKey: [QUERY_USAGE_SERVICE_KEY],
      queryFn: getUsageService,
      staleTime: 20000,
      select: (res: any) =>
        res.data.map(item => {
          return {
            id: item.usageId,
            name: item.name,
          };
        }),
    },
  ];

  const queryResults = useQueries({
    queries,
  });

  if (queryResults.every(result => result.isSuccess)) {
    return queryResults.reduce((acc: any, result: any) => {
      return [...acc, ...result.data];
    }, []);
  }
};
