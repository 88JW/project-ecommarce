import { IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/oregano";

export const AppbarContainer = styled(Box)(() => ({

    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: ' 2px 8px'
}));


export const AppbarHeader = styled(Typography)(() => ({

    padding: '4px',
    flexGrow: 1,
    fontSize: '4em',
    fontFamily: 'Oregano',
    color: Colors.secondary,

}));


export const MyList = styled(List)(({ type }) => ({


    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center',

}));

export const AcionIconContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: "100%",
    alignItems: "center",
    zIndex: 99,
    borderTop: '1px solid black',


}));


export const AcionIconContainerDesktop = styled(Box)(() => ({

    flexGrow: 0,
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    color: Colors.white,
    top: 5,
    left: '280px',
    zIndex: 1999,

}));