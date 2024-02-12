import {QUERY_NEWS_KEY} from '@/constants/query.constant';
import {useQuery} from '@tanstack/react-query';
import {getNewsList} from "@/api/services/news.service";

export const useGetUserQuery = () =>
    useQuery({
        queryKey: [QUERY_NEWS_KEY],
        queryFn: () => getNewsList().then((res) => res.data),
        staleTime: 20000,
    });

