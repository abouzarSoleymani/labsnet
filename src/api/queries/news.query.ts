'use client';

import { useQuery } from '@tanstack/react-query';

import { getNewsItem, getNewsList } from '@/api/services/news.service';
import {
  QUERY_NEWS_ITEM_KEY,
  QUERY_NEWS_KEY,
} from '@/constants/query.constant';

export const useGetNewsQuery = () =>
  useQuery({
    queryKey: [QUERY_NEWS_KEY],
    queryFn: () => getNewsList().then(res => res.data),
    staleTime: 20000,
  });

export const useGetNewsItemQuery = (id: number) =>
  useQuery({
    queryKey: [QUERY_NEWS_ITEM_KEY],
    queryFn: () => getNewsItem(id).then(res => res.data),
    staleTime: 20000,
  });
