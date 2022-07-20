import { ThemeProvider } from "@mui/system";
import { Button, Container } from '@mui/material';

import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Slider from "./components/slider";



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
        <Button variant='contained'>TEST</Button>

      </Container>
    </ThemeProvider>
  );
}

export default App;
