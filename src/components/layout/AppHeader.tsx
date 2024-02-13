import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const AppHeader = () => {
  return (
    <div
      className='sticky top-0 z-10 flex h-24 w-full items-center justify-between bg-white
             px-5
              shadow-[rgba(0,0,30,0.2)_0px_2px_4px_0px]
              md:px-10'
    >
      <div>
        <Link href='/'>
          <Image
            className='w-[200px] sm:w-[315px]'
            src='/images/logo/labsnet.png'
            width={315}
            height={47}
            alt='شبکه آزمایشگاهی فناوری های راهبردی'
          />
        </Link>
      </div>
      <div>
        <Button href='https://tech.pido.co.ir/login' variant='contained'>
          ورود / ثبت نام
        </Button>
      </div>
    </div>
  );
};
