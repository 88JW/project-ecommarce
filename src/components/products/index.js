import { Container, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { products } from "../../data/indexProducts";
import SingleProducts from "./singleProducts";

export default function Products() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));


    const renderProducts = products.map(product => (

        <Grid
            item key={product.id}
            xs={2}
            sm={4}
            md={4}
            display="flex"
            flexDirection={"column"}
            alignItems="center">

            <SingleProducts product={product} matches={matches} />
        </Grid>

    ))

    return (
        <Container>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                justifyContent={"center"}
                sx={{ margin: '20px 5px 10px 5px' }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {renderProducts}


            </Grid>

        </Container>

    );
};