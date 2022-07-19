import { ListItemButton, ListItemIcon } from "@mui/material";
import { AcionIconContainerMobile, AcionIconContainerDesktop, MyList } from "../../styles/appbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Actions({ matches }) {

    const Component = matches ? AcionIconContainerMobile : AcionIconContainerDesktop;

    return (
        <Component>
            <MyList type="row">
                <ListItemButton
                    sx={{
                        justifyContent: 'center',
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <ShoppingCartIcon />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton
                    sx={{
                        justifyContent: 'center',
                    }}>
                    <ListItemIcon sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <PersonIcon />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton
                    sx={{
                        justifyContent: 'center',
                    }}>
                    <ListItemIcon sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <FavoriteIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList >
        </Component>
    );
}