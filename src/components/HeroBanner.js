import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

// import HeroBannerImage from '../assets/images/banner2.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#2C8C99" fontWeight="600" fontSize="26px">Active Life</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Move, Energize <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Roboto" lineHeight="35px">
      Discover invigorating exercises tailored for you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#2C8C99', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#2C8C99" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Energy
    </Typography>
    {/* <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" /> */}
  </Box>
);


export default HeroBanner;
