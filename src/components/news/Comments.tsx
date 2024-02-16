import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import * as yup from 'yup';

export const Comments = () => {
  const TValidations = useTranslations('validations');
  const TCommentForm = useTranslations('commentForm');
  const validationSchema = yup.object({
    name: yup
      .string()
      .required(TValidations('required', { field: TCommentForm('name') })),
    email: yup
      .string()
      .required(TValidations('required', { field: TCommentForm('email') }))
      .email(TValidations('valid', { field: TCommentForm('email') })),
    comment: yup
      .string()
      .required(TValidations('required', { field: TCommentForm('comment') })),
    captcha: yup
      .string()
      .required(TValidations('required', { field: TCommentForm('captcha') })),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      comment: '',
      captcha: '',
    },

    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='flex w-full flex-col border-2 border-gray-300 bg-white py-5'>
      <div className=' relative pr-4 pt-6 font-bold text-green-900'>
        <div className='absolute right-0 h-[20px] w-[5px] bg-green-900' />
        <span>ارسال نظر</span>
      </div>
      <div className='flex flex-col px-10 pt-5'>
        <form onSubmit={formik.handleSubmit}>
          <div className='flex w-full flex-row'>
            <TextField
              size='small'
              name='name'
              className='!mx-2 w-[40%]'
              label={TCommentForm('name')}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              variant='outlined'
            />
            <TextField
              size='small'
              name='email'
              className='!mx-2 w-[40%]'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              label={TCommentForm('email')}
              variant='outlined'
            />
          </div>
          <div className='mt-5 flex flex-row'>
            <TextField
              className='!mx-2 w-full'
              name='comment'
              label='نظر شما'
              value={formik.values.comment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.comment && Boolean(formik.errors.comment)}
              helperText={formik.touched.comment && formik.errors.comment}
              multiline
              rows={5}
            />
          </div>
          <div className='mt-2 flex flex-row items-end justify-end'>
            <div className='ml-5 text-xs'>
              کارکترهایی که در تصویر می بینید را وارد نمایید. (حساس به حروف کوچک
              و بزرگ)
            </div>
            <div className='flex flex-col'>
              <Image
                className='mb-2 mt-4'
                src='/images/news/captcha.png'
                width={140}
                height={25}
                alt=''
              />
              <TextField
                variant='outlined'
                value={formik.values.captcha}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.captcha && Boolean(formik.errors.captcha)}
                helperText={formik.touched.captcha && formik.errors.captcha}
                name='captcha'
                label={TCommentForm('captcha')}
                size='small'
              />
            </div>
          </div>
          <div className='mt-8 flex w-full flex-row justify-end '>
            <Button type='submit' variant='contained'>
              ثبت نظر
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
