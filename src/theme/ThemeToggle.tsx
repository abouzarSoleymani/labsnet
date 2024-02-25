'use client';

import { FormControlLabel, Switch } from '@mui/material';
import { useTheme } from 'next-themes';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <FormControlLabel
      control={
        <Switch
          onChange={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        />
      }
      label={theme}
    />
  );
}

export default ThemeToggle;
