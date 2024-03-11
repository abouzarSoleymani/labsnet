'use client';

import { Button, ButtonGroup, Fade, Menu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

import useAuthStore from '@/store/auth.store';

export default function HeaderMenu() {
  const { isAuthenticated, setLogout } = useAuthStore();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onShowProfile = () => {
    setAnchorEl(null);
  };
  const onLogout = () => {
    setAnchorEl(null);
    setLogout();
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Button
            id='fade-button'
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            کاربر جدید
          </Button>
          <Menu
            id='fade-menu'
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={onShowProfile}>پروفایل</MenuItem>
            <MenuItem onClick={onLogout}>خروج</MenuItem>
          </Menu>
        </>
      ) : (
        <ButtonGroup variant='outlined' aria-label='Loading button group'>
          <Button
            href='https://tech.pido.co.ir/pre-registration'
            className='!min-w-[150px] '
            variant='outlined'
          >
            ثبت نام
          </Button>
          <Button
            href='/login'
            className='!min-w-[120px] !text-white'
            variant='contained'
          >
            ورود
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
}
