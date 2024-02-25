'use client';

import { createTheme } from '@mui/material/styles';

import { iranSans } from '@/config/localFont';

const darkTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: iranSans.style.fontFamily,
  },
});
const lightTheme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#38894e',
    },
    secondary: {
      main: '#38894e',
    },
    error: {
      main: '#ff0000',
    },
  },
  typography: {
    fontFamily: iranSans.style.fontFamily,
  },
});
export { darkTheme, lightTheme };
