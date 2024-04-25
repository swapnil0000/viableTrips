import { Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import theme from '../../../theme/theme';
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container sx={{backgroundColor:'rgba(255, 255, 255, 1)',borderRadius:'20px', padding:'30px 50px 30px 50px',display:'flex',flexDirection:'row',boxShadow:' 4px 4px 40px 0px rgba(0, 0, 0, 0.25)',width:'90%',margin:'20px'}} >
      <input style={{border:"none",width:"90%",height:'40px',borderRadius:'8px',gap:'20px',backgroundColor:'#E9E9E9'}} type='text'/>
      <button style={{display:'flex',flexDirection:'row',alignItems:'center',marginLeft:'10px',width:'100px',justifyContent:'center',borderRadius:'8px',cursor:'pointer',backgroundColor:'#008768',border:'none'}}>
       <SearchIcon sx={{backgroundColor:'transparent',color:'white'}}/>
       <Typography sx={{backgroundColor:'transparent',color:'white'}}>Search</Typography>
      </button>

    </Container>
  )
}

export default Search