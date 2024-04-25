import { Box, Container } from '@mui/material'
import React from 'react'

import Search from './search/Search'
import Choose from './choose/Choose'
import Explore from './explore/Explore'
import Insurance from './insurance/Insurance'
import Blogs from './blogs/Blogs'
import bannerImage from "../../assets/banner.jpg"
import Banner from '../../components/banner/Banner'
import Carousels from '../../carousel/Carousel'
const Home = () => {
  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
     <Carousels/>
     <Search/>
     <Choose/>
     <Explore/>
     <Insurance/>
     <Blogs/>
    </Box>
  )
}

export default Home