import { ThemeProvider } from '@mui/material';
import React from 'react';

const MUIThemeProvider = ({ children, theme }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUIThemeProvider;
