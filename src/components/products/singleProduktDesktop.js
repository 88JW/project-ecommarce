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
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { useState } from "react";

export default function SingleProduktDesktop({ product, matches }) {
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
                    <ProductAddToCart show={showOptions} variant="contained">
                        Add to Cart
                    </ProductAddToCart>
                )}


                <ProductActionsWrapper show={showOptions} >
                    <Stack direction="row">
                        <ProductFavButton>
                            <ShareIcon />
                        </ProductFavButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductMeta product={product} matches={matches} />
        </>
    );
}
