'use client';

import ReplayIcon from '@mui/icons-material/Replay';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import * as React from 'react';
import { useEffect } from 'react';
import * as yup from 'yup';

import { useGetCaptchaQuery, useLogin } from '@/api/queries/login.query';

export default function Login() {
  const { data: captcha, refetch } = useGetCaptchaQuery();
  const TValidations = useTranslations('validations');
  const TLoginForm = useTranslations('loginForm');

  const { mutate: mutateLogin, isError } = useLogin();

  const validationSchema = yup.object({
    username: yup
      .string()
      .required(TValidations('required', { field: TLoginForm('username') })),
    password: yup
      .string()
      .required(TValidations('required', { field: TLoginForm('password') })),
    captchaAnswer: yup
      .string()
      .required(
        TValidations('required', { field: TLoginForm('captchaAnswer') })
      ),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      accountType: 'serviceProvider',
      captchaAnswer: '',
      captchaId: '',
    },

    validationSchema,
    onSubmit: (values: any) => {
      mutateLogin(values);
    },
  });

  useEffect(() => {
    if (captcha) {
      formik.setFieldValue('captchaId', captcha?.captchaId);
    }
  }, [captcha]);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-8'>
      <div className='container w-full max-w-[400px] py-10 shadow-2xl'>
        <form onSubmit={formik.handleSubmit}>
          <div className='flex  flex-col items-center justify-center gap-3'>
            <Image
              src='/images/logo/f-2.png'
              width={170}
              height={200}
              alt=''
              style={{
                width: '170px',
                height: '200px',
              }}
            />
            <TextField
              id='outlined-basic'
              label='نام کاربری'
              name='username'
              variant='outlined'
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
            />
            <TextField
              id='outlined-basic'
              label='رمز عبور'
              variant='outlined'
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
            />
            <div className='flex items-center justify-center'>
              <ReplayIcon
                className='cursor-pointer'
                onClick={() => refetch()}
              />
              <div
                dangerouslySetInnerHTML={{ __html: captcha?.captchaBase64 }}
              />
            </div>
            <TextField
              id='outlined-basic'
              label='کد امنیتی'
              name='captchaAnswer'
              value={formik.values.captchaAnswer}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.captchaAnswer &&
                Boolean(formik.errors.captchaAnswer)
              }
              variant='outlined'
            />

            <Button
              className='!min-w-[120px] !text-white'
              variant='contained'
              type='submit'
            >
              ورود
            </Button>
            {isError && <div className='text-sm text-red-500' />}
          </div>
        </form>
      </div>
    </main>
  );
}
