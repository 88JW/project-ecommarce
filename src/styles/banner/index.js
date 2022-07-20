import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
    display: "flex",
    justifyContent: "left",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    // background: "#C8E1BB",
    // background: Colors.shaft,

    [theme.breakpoints.down("md")]: {
        justifyContent: 'center',
    },

    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
    },

}));

export const BannerContent = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "30px",
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "500px",

    // background: '#C8E1BB',
    [theme.breakpoints.down("md")]: {
        width: "350px",

    },
    [theme.breakpoints.down("sm")]: {
        width: "320px",

    },
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
    lineHeight: 1.5,
    fontSize: "72px",
    marginBottom: "20px",
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px',
        display: 'none',
    }
}));

