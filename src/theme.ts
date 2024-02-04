'use client';
import {createTheme} from '@mui/material/styles';
import {iranSans} from "@/config/localFont";


const theme = createTheme({
    typography: {
        fontFamily: iranSans.style.fontFamily
    },
});

export default theme;