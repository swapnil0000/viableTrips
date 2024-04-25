import { Box, Container, Input, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import map from "../contact/map.png"
import contactBanner from "../contact/bannerContact.png"
import Banner from '../../components/banner/Banner'
const Contact = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container >
      <Banner img={contactBanner} />

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h3' >Why Choose Viabletrips</Typography>

        <Box sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', marginTop: '18px', gap: '20px' }}>
          <Box sx={{ width: { lg: '250px', md: '200px', sm: "180px", xs: '180px' }, height: '180px', borderRadius: '10px', boxShadow: '4px 4px 36px 0px rgba(0, 0, 0, 0.16)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant='h6'>Noida Office</Typography>
            <Typography variant='h3'>Noida , UP</Typography>
            <Typography>Lorem ipsum dolor</Typography>
          </Box>

          <Box sx={{ width: { lg: '250px', md: '200px', sm: "180px", xs: '180px' }, height: '180px', borderRadius: '10px', boxShadow: '4px 4px 36px 0px rgba(0, 0, 0, 0.16)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant='h6'>Noida Office</Typography>
            <Typography variant='h3'>Noida , UP</Typography>
            <Typography>Lorem ipsum dolor</Typography>
          </Box>

          <Box sx={{ width: { lg: '250px', md: '200px', sm: "180px", xs: '180px' }, height: '180px', borderRadius: '10px', boxShadow: '4px 4px 36px 0px rgba(0, 0, 0, 0.16)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant='h6'>Noida Office</Typography>
            <Typography variant='h3'>Noida , UP</Typography>
            <Typography>Lorem ipsum dolor</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '15px'
      }}>
        <Typography variant='h3'>Leave Us Your Info</Typography>
        <Typography marginTop='20px' variant='h6'>We Will  Get Back  To You Soon</Typography>
      </Box>


      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <Box sx={{ width: '600px', height: '400px', backgroundColor: 'rgba(255, 255, 255, 1)', boxShadow: '4px 4px 36px 0px rgba(0, 0, 0, 0.16)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ backgroundColor: 'transparent', marginTop: '30px' }}>
            <Typography variant='h5'>Name</Typography>
            <input style={{ height: '40px', backgroundColor: 'rgba(238, 240, 245, 1)', border: 'none', width: '300px', marginTop: '10px', outline: 'none' }} />
          </Box>

          <Box sx={{ backgroundColor: 'transparent', marginTop: '30px' }}>
            <Typography variant='h5'>Email</Typography>
            <input style={{ height: '40px', backgroundColor: 'rgba(238, 240, 245, 1)', border: 'none', width: '300px', marginTop: '10px', outline: 'none' }} />
          </Box>

          <Box sx={{ backgroundColor: 'transparent', marginTop: '30px', }}>
            <Typography variant='h5'>Message</Typography>
            <input style={{ height: '80px', backgroundColor: 'rgba(238, 240, 245, 1)', border: 'none', width: '300px', marginTop: '10px', outline: 'none' }} />
          </Box>

          <Box sx={{backgroundColor: 'transparent'}}>
           <button style={{padding:'7px',marginTop:'10px',fontSize:'15px',color:'white',border:'none',backgroundColor
          :'rgba(0, 135, 104, 1)'}}>Submit</button>
          </Box>

        </Box>
      </Box>

      <Box>
      <img  style={{objectFit:'cover',width:'100%',height:'300px',marginTop:'50px',marginBottom:'20px'}} src={map}/>
    </Box>

    </Container>
  )
}

export default Contact