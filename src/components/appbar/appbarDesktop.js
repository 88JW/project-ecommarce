import { ListItemButton, ListItemText } from "@mui/material";
import { AcionIconContainerMobile, AcionIconContainerDesktop, AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./actions";
import { useUIContext } from "../context/ui";




export default function AppbarDesktop({ matches }) {

    const { setShowSearchBox } = useUIContext();

    return (

        <AppbarContainer>
            <AppbarHeader>
                Oregano.com
            </AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home" />
                <ListItemText primary="Categories" />
                <ListItemText primary="Products" />
                <ListItemText primary="Contact" />
                <ListItemButton>
                    <SearchIcon onClick={() => setShowSearchBox(true)} />
                </ListItemButton>
            </MyList>
            <Actions matches={matches} />

        </AppbarContainer>



    );
}