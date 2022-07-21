import { Stack } from "@mui/material";
import { Product, ProductActionsWrapper, ProductFavButton, ProductImage, ProductAddToCart } from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';



export default function SingleProducts({ product, matches }) {

    return (
        <>
            <Product>
                <ProductImage src={product.image} />
                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                    <Stack direction="row">
                        <ProductFavButton isFav={0} >
                            <FavoriteIcon />
                        </ProductFavButton>
                        <ProductFavButton isFav={0} >
                            <ShareIcon />
                        </ProductFavButton>
                        <ProductFavButton isFav={0} >
                            <FitScreenIcon />
                        </ProductFavButton>
                    </Stack>
                </ProductActionsWrapper>

            </Product>
            <ProductAddToCart>Add to cart</ProductAddToCart>
        </>


    );

};