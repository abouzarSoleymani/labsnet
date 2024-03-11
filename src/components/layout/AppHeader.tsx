import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton, InputBase, Paper } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import HeaderMenu from '@/components/layout/HeaderMenu';

export const AppHeader = () => {
  return (
    <div
      className='flex h-24 w-full items-center justify-between bg-white
             px-5
              md:px-10'
    >
      <div className='flex w-[50%] items-center justify-start sm:w-[70%]'>
        <Link href='/' className='flex items-center justify-center'>
          <Image
            className='mb-2 w-[200px] sm:w-[315px]'
            src='/images/logo/labsnet-logo.png'
            width={50}
            height={40}
            style={{ width: '50px', height: '40px' }}
            alt='شبکه آزمایشگاهی فناوری های راهبردی'
          />
          <span className='pr-3'> Labsnet.ir</span>
        </Link>
        <Paper
          className='mr-10  !hidden !drop-shadow-md md:!flex'
          component='form'
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
            boxShadow: 0,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder='جستجو'
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <div className='flex w-[50%] items-center   justify-end sm:w-[40%]'>
        <Button href='/machines' variant='outlined' className='!ml-5'>
          تجهیزات
        </Button>
        <HeaderMenu />
      </div>
    </div>
  );
};
