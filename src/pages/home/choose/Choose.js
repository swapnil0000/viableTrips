import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import insurance from "../../../assets/insurance.png"
import frame from "../../../assets/frame.png"
import like from "../../../assets/like.png"
import offer from "../../../assets/offer.png"

const Choose = () => {
     const theme=useTheme();
     const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container sx={{display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
     <Typography variant={isMobileView?'h3':'h2'} sx={{marginTop:'30px'}}>
       Why Choose Viabletrips
     </Typography>
    <Box sx={{display:'flex',flexDirection:isMobileView? "column" : "row",marginTop:'20px',padding:isMobileView?"10px":'0' , gap:{xl:'30px',lg:'20px',md:'10px'}}}>
     <Box sx={{width:"200px",height:'170px',padding:'24px',gap:'10px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',  marginTop:'10px'  ,       boxShadow: '4px 4px 32px 0px rgba(0, 0, 0, 0.25)',
}}>
         <img src={insurance} alt='uu'/>
         <Typography variant='h4'>Free Insurance</Typography>
         <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur. </Typography>
    </Box>
    <Box sx={{width:"200px",height:'170px',padding:'24px',gap:'10px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',  marginTop:'10px'  ,       boxShadow: '4px 4px 32px 0px rgba(0, 0, 0, 0.25)'}}>
    <img src={like} alt='uu'/>
         <Typography variant='h4'>Most Trusted</Typography>
         <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur. </Typography>
    </Box>
    <Box sx={{width:"200px",height:'170px',padding:'24px',gap:'10px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',   marginTop:'10px'  ,      boxShadow: '4px 4px 32px 0px rgba(0, 0, 0, 0.25)'}}>
         <img src={frame} alt='uu'/>
         <Typography variant='h4'>Free Cancellation</Typography>
         <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur. </Typography>
    </Box>
    <Box sx={{width:"200px",height:'170px',padding:'24px',gap:'10px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',   marginTop:'10px'  ,   boxShadow: '4px 4px 32px 0px rgba(0, 0, 0, 0.25)'}}>
         <img src={offer} alt='uu'/>
         <Typography variant='h4'>Exclusive offer</Typography>
         <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur. </Typography>
    </Box>
    </Box>
    </Container>
  )
}

export default Choose