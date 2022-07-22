import { Button, Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { useUIContext } from "../context/ui";
import { DrawerCloseButton } from "../../styles/appbar/";
import CloseIcon from '@mui/icons-material/Close';
import { Colors } from "../../styles/theme";



export default function AppDrawer() {
    const { drawerOpen, setDrawerOpen } = useUIContext();

    return (
        <>
            {drawerOpen && (
                <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                    <CloseIcon
                        sx={{
                            fontSize: "2.5rem",
                            color: Colors.white,
                            border: `1px solid white`,
                            borderRadius: 100,
                        }}
                    />
                </DrawerCloseButton>
            )}
            <Drawer open={drawerOpen}>
                <List>
                    <ListItemButton>
                        <ListItemText>Home</ListItemText>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemText>Categories</ListItemText>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemText>Products</ListItemText>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemText>About Us</ListItemText>
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemText>Contact Us</ListItemText>
                    </ListItemButton>
                    <Divider />
                </List>
            </Drawer>
        </>
    );
}
// export default function AppDrawer() {

//     const { draweOpen, setDrawerOpen } = useUIContext();


//     return (
//         <>
//             {draweOpen && <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
//                 <CloseIcon
//                     sx={{
//                         fontSize: '2.5rem',
//                         color: Colors.primary,
//                     }}
//                 />
//             </DrawerCloseButton>
//             }
//             <Drawer open={draweOpen}>

//                 <List>
//                     <ListItemButton>
//                         <ListItemText>Home</ListItemText>
//                     </ListItemButton>
//                     <Divider />
//                     <ListItemButton>
//                         <ListItemText>Categories</ListItemText>
//                     </ListItemButton>
//                     <Divider />
//                     <ListItemButton>
//                         <ListItemText>Products</ListItemText>
//                     </ListItemButton>
//                     <Divider />
//                     <ListItemButton>
//                         <ListItemText>Contact</ListItemText>
//                     </ListItemButton>
//                 </List>
//             </Drawer >
//         </>
//     );

// };