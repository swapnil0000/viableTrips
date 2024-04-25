import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import footerlogo from "../footer/footerlogo.png"
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'black', py: 4,width:'100%',height:'300px' }}>
     <Box sx={{backgroundColor:'transparent',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
      <Typography variant='h3' sx={{color:'white' , backgroundColor:'transparent'}}>Your Travel Jurney 
      Start Here</Typography>
      <Box sx={{backgroundColor:'transparent'}}>
        <input style={{width:'200px',height:'38px',margin:'8px',borderRadius:'5px',border:'none',outline:'none'}}/>
        <button>Submti</button>
      </Box>
      </Box>
      <Box>
       <Box sx={{backgroundColor:'transparent'}}>
          <Typography sx={{backgroundColor:'black',color:'white'}}>Lorem ipsum dolor sit amet consectetur. Donec lorem suspendisse cum ri</Typography>
       </Box>
      </Box>
    </Box>
  );
}

export default Footer;
