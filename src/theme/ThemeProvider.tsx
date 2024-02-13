import { ThemeProvider } from '@mui/material';
import React from 'react';

import Theme from './theme';

const ThemeProviderApp = ({ children }: any) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

export default ThemeProviderApp;
