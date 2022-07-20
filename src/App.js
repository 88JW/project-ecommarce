import { ThemeProvider } from "@mui/system";
import { Box, Button, Container, Typography } from '@mui/material';

import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Slider from "./components/slider";
import Products from "./components/products";


function App() {

  useEffect(() => {

    document.title = 'Ecommarce MuI Project - Home';

  }, []);


  return (

    <ThemeProvider theme={theme}>
      <Container maxWidth="xl"
        sx={{ background: '#fff' }} >

        <Appbar />
        <Banner />
        <Slider />
        <Box display="flex" justifyContent={"center"} sx={{ padding: 4 }}>
          <Typography variant="h4">Our spices:</Typography>
        </Box>
        <Products />
        <Button variant='contained'>1.47</Button>

      </Container>
    </ThemeProvider >
  );
}

export default App;
