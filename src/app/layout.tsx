import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';

import { iranSans } from '@/config/localFont';

import theme from '../theme';

export const metadata: Metadata = {
  title: 'شبکه آزمایشگاهی فناوری های راهبردی',
  description:
    'شبکه آزمایشگاهی فناوری های راهبردی، دسترسی سریع به خدمات، تجهیزات و دستگاه‌های آزمایشگاه‌های کشور؛ مقالات تخصصی؛ دوره‌های آموزشی و تخفیف خدمات در باشگاه ...',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`${iranSans.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
