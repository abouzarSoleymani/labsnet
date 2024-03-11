'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { getCaptcha, login } from '@/api/services/login.service';
import { QUERY_CAPTCHA_KEY, QUERY_LOGIN_KEY } from '@/constants/query.constant';
import useAuthStore from '@/store/auth.store';

export const useGetCaptchaQuery = () =>
  useQuery({
    queryKey: [QUERY_CAPTCHA_KEY],
    queryFn: () => getCaptcha().then(res => res.data),
    staleTime: 20000,
  });

export const useLogin = () => {
  const { setLogin } = useAuthStore();
  const router = useRouter();

  return useMutation({
    mutationKey: [QUERY_LOGIN_KEY],
    mutationFn: data =>
      login(data).then(res => {
        return res.data;
      }),
    onSuccess: data => {
      setLogin(data.token);
      router.push('/');
    },
  });
};
