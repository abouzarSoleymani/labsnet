import { Button } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const NotFoundPage = () => {
  const t = useTranslations();

  return (
    <div className=' flex min-h-screen w-full flex-col items-center justify-center bg-gray-100'>
      <div className='text-8xl font-bold text-darkBlur'>404</div>
      <div className='my-10 border-y-2 border-dashed border-y-darkBlur py-8 text-2xl text-darkBlur'>
        {t('NotFoundPage.pageNotFound')}
      </div>
      <Button href='/' variant='contained'>
        {t('NotFoundPage.backToHome')}
      </Button>
    </div>
  );
};

export default NotFoundPage;
