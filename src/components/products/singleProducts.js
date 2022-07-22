import { Stack } from "@mui/material";
import { Product, ProductActionsWrapper, ProductFavButton, ProductImage, ProductAddToCart } from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../producdetail";
import InfoIcon from '@mui/icons-material/Info';



export default function SingleProducts({ product, matches }) {

    const [ProductDetailsDialog, showProductDetailsDialog, closeProductDetailDialog] =
        useDialogModal(ProductDetail);


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
                        <ProductFavButton  >
                            <ShareIcon />
                        </ProductFavButton>
                        <ProductFavButton onClick={() => showProductDetailsDialog()}  >
                            <InfoIcon />
                        </ProductFavButton>
                    </Stack>
                </ProductActionsWrapper>

            </Product>
            <ProductAddToCart>Add to cart</ProductAddToCart>
            <ProductDetailsDialog product={product} />
        </>


    );

};