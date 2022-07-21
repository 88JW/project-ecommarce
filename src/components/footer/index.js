import {
    Grid,
    Box,
    Typography,
    ListItemText,
    List,
    Stack,
} from "@mui/material";
import { FooterTitle, Subscribe } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
    return (
        <Box
            sx={{
                background: Colors.secondary,
                color: Colors.white,
                p: { xs: 4, md: 10 },
                pt: 12,
                pb: 12,
                fontSize: { xs: "12px", md: "14px" },
            }}
        >
            <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{
                    marginBottom: { xs: 5, },
                }}
            >
                <Grid item md={6} lg={4} xs={12}>
                    <FooterTitle variant="body1">About us:</FooterTitle>
                    <Typography variant="capition2">
                        orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mi
                        nibh. Nulla vel risus at ante pellentesque porttitor ac a lacus.
                        Morbi accumsan diam eu lacus pharetra finibus. Aliquam placerat
                        elementum arcu, at interdum dui venenatis ac. Fusce dolor mauris,
                        aliquet sit amet nulla ut, ornare convallis arcu. Sed vehicula
                        ullamcorper nulla, non faucibus magna. Donec eu lobortis risus.
                    </Typography>
                    <Box
                        sx={{
                            mt: 4,
                            color: Colors.white,
                            display: "flex",
                            justifyContent: 'center',
                        }}
                    >
                        <FacebookIcon sx={{ mr: 1 }} />
                        <InstagramIcon sx={{ mr: 1 }} />
                        <TwitterIcon sx={{ mr: 1 }} />
                    </Box>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Information:</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="capition2">
                                About us
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="capition2">
                                Order
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="capition2">
                                Delivery
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="capition2">
                                Privary and Policy
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">newsletter:</FooterTitle>
                    <Stack>
                        <Subscribe label="Email addres" variant="standard"></Subscribe>
                    </Stack>
                </Grid>
            </Grid>
        </Box >
    );
}
