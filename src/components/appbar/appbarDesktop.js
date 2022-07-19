import { ListItemButton, ListItemText } from "@mui/material";
import { AcionIconContainerMobile, AcionIconContainerDesktop, AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./actions";



export default function AppbarDesktop({ matches }) {


    return (

        <AppbarContainer>
            <AppbarHeader>
                Oregano.com
            </AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home" />
                <ListItemText primary="Categories" />
                <ListItemText primary="Products" />
                <ListItemText primary="Contakt" />
                <ListItemButton>
                    <SearchIcon />
                </ListItemButton>
            </MyList>
            <Actions matches={matches} />

        </AppbarContainer>



    );
}