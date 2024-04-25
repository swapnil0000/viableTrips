import { Box, Container } from '@mui/material'
import React from 'react'

const Banner = ({img}) => {
  return (
    <Container>
     <img style={{width:'100%',height:'300px',borderRadius:'24px',marginTop:'20px',objectFit:'cover'}} src={img} alt='banner'/>
    </Container>

  )
}

export default Banner