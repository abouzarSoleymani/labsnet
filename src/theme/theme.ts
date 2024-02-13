'use client';

import { createTheme } from '@mui/material/styles';

import { iranSans } from '@/config/localFont';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#38894e',
    },
  },
  typography: {
    fontFamily: iranSans.style.fontFamily,
  },
});

export default theme;