import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";


export const SliderContainer = styled(Box)(({ theme }) => ({

    [theme.breakpoints.up('md')]: {
        padding: '40px 0px 40px 0px',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px 20px 0px',
    overflow: 'hidden',
    background: Colors.secondary

}));

export const SliderText = styled(Typography)(({ theme }) => ({
    fontFamily: 'Oregano',
    color: Colors.white,
    fontSieze: '1.5rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    }

}));