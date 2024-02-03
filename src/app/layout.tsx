import "./globals.css";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {ThemeProvider} from '@mui/material/styles';
import theme from '../theme';
import localFont from "@next/font/local";

const iranSans = localFont({
    src: [
        {
            path: '../../public/fonts/ttf/IRANSansWeb(FaNum).ttf',
            weight: '400'
        },
    ],
    variable: '--font-iranSans'
})

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${iranSans.variable}`}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
