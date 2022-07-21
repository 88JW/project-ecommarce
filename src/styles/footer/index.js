import { TextField, Typography } from "@mui/material";
import { border, borderBottom, styled } from "@mui/system";
import { Colors } from "../theme";



export const FooterTitle = styled(Typography)(() => ({
    textTransform: 'uppercase',
    marginBottom: '1em',



}));

export const Subscribe = styled(TextField)(() => ({
    marginTop: '10px',
    color: '#FFFFFF',
    '.MuiInputLabel-root': {
        color: Colors.white
    },

    '.MuiInput-root::before': {
        color: '#FFFFFF',
        borderBottom: `1px solid #FFFFFF`
    },

    '.MuiInput-root::after': {
        color: '#FFFFFF',
        borderBottom: `1px solid #FFFFFF`
    },



}));