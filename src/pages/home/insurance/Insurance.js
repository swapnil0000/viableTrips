import { Box, Container,  Typography,  useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const Insurance = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down('md'))
  return (
      <Container>
       <Box sx={{
        width:'200px',
        borderRadius:'8px',
        boxShadow: '4px 4px 32px 0px rgba(0, 0, 0, 0.25)',
        height:'150px',
        marginTop:'40px', backgroundColor:'#bcd6d1',width:"100%",
         display:'flex',
         flexDirection:'column',
         alignItems:'center',
         justifyContent:'center'
       }}>
         <Typography sx={{backgroundColor:'transparent'}} variant={isMobileView?"h4":'h3'}>
         Free Accidental Travel Insurance
         </Typography>
         <Typography variant='h6' sx={{backgroundColor:'transparent',margin:'20px'}}>
         Enjoy the peace of mind with complimentary accidental travel insurance provided by <br/> ViableTrips. Your safety is our priority, and we've got you covered throughout your journey.
         </Typography>

       </Box>
       </Container>
  )
}

export default Insurance