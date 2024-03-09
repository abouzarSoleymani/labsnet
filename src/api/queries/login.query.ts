'use client';

import { useMutation, useQuery } from '@tanstack/react-query';

import { getCaptcha, login } from '@/api/services/login.service';
import { QUERY_CAPTCHA_KEY, QUERY_LOGIN_KEY } from '@/constants/query.constant';

export const useGetCaptchaQuery = () =>
  useQuery({
    queryKey: [QUERY_CAPTCHA_KEY],
    queryFn: () => getCaptcha().then(res => res.data),
    staleTime: 20000,
  });

export const useLogin = loginResponse =>
  useMutation({
    mutationKey: [QUERY_LOGIN_KEY],
    mutationFn: data =>
      login(data).then(res => {
        loginResponse(res.data);
        return res.data;
      }),
  });
