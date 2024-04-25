import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner from "../assets/banner.jpg"
import mountain from "../assets/mountain1.jpg"
import { Box, Container } from '@mui/material';
const Carousels = () => {
  return (
    <Container sx={{borderRadius:'10px'}}>
     <Box sx={{borderRadius:'20px',overflow:'hidden'}}>
    <Carousel 
    borderRadius={10}
    autoFocus={false}
    autoPlay={false}
    width='100%'
    dynamicHeight={150} // Adjust the height as needed
    showStatus={false}
    infiniteLoop={true}
    showIndicators={false}
    centerSlidePercentage={50}
    showThumbs={false}>
    <div>
        <img  style={{height:'300px',borderRadius:'20px',objectFit:'cover'}}   src={banner} />
    </div>
    <div>
     <img  style={{height:'300px',borderRadius:'20px',objectFit:'cover'}}  src={mountain} />
    </div>
    <div>
         <img  style={{height:'300px',borderRadius:'20px',objectFit:'cover'}}  src={banner} />        
    </div>
</Carousel>
</Box>
</Container>
  )
}

export default Carousels