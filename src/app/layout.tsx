import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';

import { ProvidersReactQuery } from '@/app/providersReactQuery';
import { iranSans } from '@/config/localFont';
import RTL from '@/theme/RTL';
import ThemeProviderApp from '@/theme/ThemeProvider';
import type { ChildContainerProps } from '@/types/types';

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
}: Readonly<ChildContainerProps>) {
  return (
    <html lang='en'>
      <body className={`${iranSans.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProviderApp>
            <RTL>
              <CssBaseline />
              <ProvidersReactQuery>{children}</ProvidersReactQuery>
            </RTL>
          </ThemeProviderApp>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
