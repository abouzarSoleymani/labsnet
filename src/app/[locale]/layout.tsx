import '../globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';

import { ProvidersReactQuery } from '@/app/providersReactQuery';
import { siteConfig } from '@/config/appConfig';
import { iranSans } from '@/config/localFont';
import RTL from '@/theme/RTL';
import ThemeProviderApp from '@/theme/ThemeProvider';
import type { ChildContainerProps } from '@/types/types';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: siteConfig.icons.icon,
  },
};

export default function LocaleLayout({
  children,
  params,
}: Readonly<ChildContainerProps>) {
  return (
    <html lang={params.locale}>
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
