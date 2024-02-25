import '../globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';

import { ProvidersReactQuery } from '@/app/providersReactQuery';
import { siteConfig } from '@/config/appConfig';
import { iranSans } from '@/config/localFont';
import { NextThemeProvider } from '@/theme/NextThemeProvide';
import RTL from '@/theme/RTL';
import { lightTheme } from '@/theme/theme';
import MUIThemeProvider from '@/theme/ThemeProvider';
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
    <html lang={params.locale} suppressHydrationWarning>
      <body className={`${iranSans.variable}`}>
        <AppRouterCacheProvider>
          <MUIThemeProvider theme={lightTheme}>
            <RTL>
              <CssBaseline />
              <ProvidersReactQuery>
                <NextThemeProvider
                  attribute='class'
                  defaultTheme='system'
                  enableSystem
                >
                  {children}
                </NextThemeProvider>
              </ProvidersReactQuery>
            </RTL>
          </MUIThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
