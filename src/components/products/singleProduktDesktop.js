import { Stack } from "@mui/material";
import {
    Product,
    ProductActionsWrapper,
    ProductFavButton,
    ProductImage,
    ProductAddToCart,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from '@mui/icons-material/Info';
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../producdetail";




export default function SingleProduktDesktop({ product, matches }) {

    const [ProductDetailsDialog, showProductDetailsDialog, closeProductDetailDialog] =
        useDialogModal(ProductDetail);



    const [showOptions, setShowOptions] = useState(false);




    const handleMousEnter = () => {
        setShowOptions(true);
    };

    const handleMousLeave = () => {
        setShowOptions(false);
    };

    return (
        <>
            <Product onMouseEnter={handleMousEnter} onMouseLeave={handleMousLeave}>
                <ProductImage src={product.image} />
                <ProductFavButton isFav={0}>
                    <FavoriteIcon />
                </ProductFavButton>
                {showOptions && (
                    <ProductAddToCart
                        show={showOptions} variant="contained">
                        Add to Cart
                    </ProductAddToCart>
                )}


                <ProductActionsWrapper show={showOptions} >
                    <Stack direction="row">
                        <ProductFavButton onClick={() => showProductDetailsDialog()}  >
                            <InfoIcon />
                        </ProductFavButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductMeta product={product} matches={matches} />
            <ProductDetailsDialog product={product} />
        </>
    );
}
