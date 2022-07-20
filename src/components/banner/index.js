import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BannerContainer, BannerContent, BannerImage, BannerTitle } from '../../styles/banner';


export default function Banner() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage src="/images/banner3.jpg" />
            <BannerContent>
                <BannerTitle variant='h2'>Oregano Shop</BannerTitle>
                <Typography variant='h6'>Come and by good stuff</Typography>

            </BannerContent>
        </BannerContainer>
    );

}