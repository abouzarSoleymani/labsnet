import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Image from 'next/image';

export const Comments = () => {
  return (
    <div className='flex w-full flex-col border-2 border-gray-300 bg-white py-5'>
      <div className=' relative pr-4 pt-6 font-bold text-green-900'>
        <div className='absolute right-0 h-[20px] w-[5px] bg-green-900'></div>
        ارسال نظر
      </div>
      <div className='flex flex-col px-10 pt-5'>
        <div className='flex w-full flex-row'>
          <TextField
            size='small'
            className='!mx-2 w-[40%]'
            label='نـــام'
            variant='outlined'
          />
          <TextField
            size='small'
            className='!mx-2 w-[40%]'
            label='ایمیل'
            variant='outlined'
          />
        </div>
        <div className='mt-5 flex flex-row'>
          <TextField
            className='!mx-2 w-full'
            label='نظر شما'
            multiline
            rows={5}
            defaultValue='نظر شما'
          />
        </div>
        <div className='mt-2 flex flex-row items-end justify-end'>
          <div className='ml-5 text-xs'>
            کارکترهایی که در تصویر می بینید را وارد نمایید. (حساس به حروف کوچک و
            بزرگ)
          </div>
          <div className='flex flex-col'>
            <Image
              className='mb-2 mt-4'
              src='/images/news/captcha.png'
              width={140}
              height={25}
              alt=''
            />
            <TextField variant='outlined' size='small' />
          </div>
        </div>
        <div className='mt-8 flex w-full flex-row justify-end '>
          <Button variant='contained'>ثبت نظر</Button>
        </div>
      </div>
    </div>
  );
};
