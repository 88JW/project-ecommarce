import { Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery } from "@mui/material";
import { Box, styled, } from "@mui/material";
import { Colors } from "../../styles/theme";
import CloseIcon from '@mui/icons-material/Close';
import { display, padding } from "@mui/system";
import { useTheme } from "@emotion/react";
import { Product, ProductImage, ProductAddToCart } from "../../styles/products";
import IncDeC from "../ui";


function SlideTransition(props) {

    return <Slide direction="down" {...props} />
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({

    display: 'flex',
    padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({

    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineHeight: 1.5,

}));


export default function ProductDetail({ open, onClose, product }) {


    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog
            TransitionComponent={SlideTransition}
            variant="permanent"
            open={open}
            fullScreen
        >

            <DialogTitle
                sx={{
                    background: Colors.secondary
                }}>
                <Box
                    display={'flex'}
                    alignItems="center"
                    justifyContent={"space-between"}
                    variant="h2">
                    {product.name}
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

            </DialogTitle>

            <DialogContent>
                <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
                    <Product sx={{
                        mr: 4
                    }}>
                        <ProductImage src={product.image} />
                    </Product>
                    <ProductDetailInfoWrapper>
                        <Typography variant="h3">{product.name}</Typography>
                        <Typography variant="h5">Package: {product.description}</Typography>
                        <Typography variant="h5">Price: {product.price}$</Typography>
                        <Box marginTop={2}>
                            <Typography variant="h5">Add to cart:</Typography>
                            <IncDeC />
                        </Box>
                    </ProductDetailInfoWrapper>




                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    );

};


