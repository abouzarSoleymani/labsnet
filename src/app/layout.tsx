import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {ThemeProvider} from '@mui/material/styles';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import type {Metadata} from 'next';

import {iranSans} from '@/config/localFont';

import theme from '../theme';
import {AppProps} from "next/app";
import {ChildContainerProps, Page} from "@/types/types";
import {Layout} from "@/components/layout/Layout";

export const metadata: Metadata = {
    title: 'شبکه آزمایشگاهی فناوری های راهبردی',
    description:
        'شبکه آزمایشگاهی فناوری های راهبردی، دسترسی سریع به خدمات، تجهیزات و دستگاه‌های آزمایشگاه‌های کشور؛ مقالات تخصصی؛ دوره‌های آموزشی و تخفیف خدمات در باشگاه ...',
    icons: {
        icon: '/favicon.ico',
    },
};

type LayoutProps = ChildContainerProps & AppProps & {
    Component: Page
}

export default function RootLayout(props: LayoutProps) {
    const {Component, pageProps, children} = props;
    const getLayout = Component?.getLayout ?? (page => page)
    if (Component?.getLayout) {
        return (
            <html lang='en'>
            <body className={`${iranSans.variable}`}>
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                    {getLayout(<Component {...pageProps} />)}
                </ThemeProvider>
            </AppRouterCacheProvider>
            </body>
            </html>
        );
    } else {
        return (
            <html lang='en'>
            <body className={`${iranSans.variable}`}>
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                    <Layout>
                        {children}
                    </Layout>
                </ThemeProvider>
            </AppRouterCacheProvider>
            </body>
            </html>
        )
    }

}
