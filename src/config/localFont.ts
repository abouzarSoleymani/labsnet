import localFont from 'next/font/local';

export const iranSans = localFont({
  src: [
    {
      path: '../../public/fonts/ttf/IRANSansWeb(FaNum).ttf',
      weight: '400',
    },
  ],
  variable: '--font-iranSans',
});
