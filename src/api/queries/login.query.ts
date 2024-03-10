'use client';

import { useMutation, useQuery } from '@tanstack/react-query';

import { getCaptcha, login } from '@/api/services/login.service';
import { QUERY_CAPTCHA_KEY, QUERY_LOGIN_KEY } from '@/constants/query.constant';
import { setInLocalStorage } from '@/utils/helper';
import { useRouter } from 'next/navigation';

export const useGetCaptchaQuery = () =>
  useQuery({
    queryKey: [QUERY_CAPTCHA_KEY],
    queryFn: () => getCaptcha().then(res => res.data),
    staleTime: 20000,
  });

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: [QUERY_LOGIN_KEY],
    mutationFn: data =>
      login(data).then(res => {
        return res.data;
      }),
    onSuccess: data => {
      setInLocalStorage('token', data.token);
      router.push('/');
    },
  });
};
