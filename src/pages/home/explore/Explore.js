import { Box, Button, Card, CardActions, CardMedia, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Cards from './Card'
import delhi from "../../../assets/delhi.jpg"
import ladakh from "../../../assets/ladakh.png"
import taj from "../../../assets/taj.png"
import hyderabad from "../../../assets/hyderabad.png"
import { lightGreen } from '@mui/material/colors'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Explore = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down('md'))
  const data=[
    {
      id:1,
      img:delhi,
      value:"Delhi"
    },
    {
      id:2,
      img:ladakh,
      value:'Ladakh'
    },
    {
      id:3,
      img:taj,
      value:"Taj"
    },
    {
      id:4,
      img:hyderabad,
      value:"Hyderabad"
    }
  ]
  return (
    <Container sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
     <Typography  variant={isMobileView?'h3':'h2'} sx={{marginTop:'50px'}}>Explore Top Destination</Typography>
     <Box sx={{display:'flex',flexDirection:'row',marginTop:'20px',gap:'20px',borderRadius:'5px',alignItems:'center',justifyContent:'center'}}>
     <Carousel 
    
    borderRadius={10}
    autoFocus={false}
    autoPlay={false}
    width='100%' // Adjust the height as needed
    showStatus={true}
    infiniteLoop={true}
    showIndicators={false}
    axis='horizontal'
    showThumbs={false}>
   
      <Grid  container  spacing={2} justifyContent="center">
      {data.map((ele,index)=>(
        <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
        <Card sx={{ width:'100%' }}>
        <CardMedia
          sx={{ height: 180 }}
          image={ele.img}
          title="green iguana"
        />
        <CardActions sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <Typography variant='h5' sx={{color:'text.primary'}}>{ele.value}</Typography>
          <Button sx={{textTransform:'none'}}>Book now</Button>
        </CardActions>
      </Card>
        </Grid>
        ))}
      </Grid>

      </Carousel>
     </Box>
    </Container>
  )
}

export default Explore