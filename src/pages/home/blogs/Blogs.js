import { Box, Button, Card, CardActions, CardMedia, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Cards from '../explore/Card'
import blogs1 from "../../../assets/blogs1.png"
import blogs2 from "../../../assets/blogs2.png"
import blogs3 from "../../../assets/blogs3.png"

const Blogs = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down('md'))
  const data=[{
    id:1,
    img:blogs1,
    name:'Blogs 1'
  },{
    id:2,
    img:blogs2,
    name:'Blogs 2'
  },{
    id:3,
    img:blogs3,
    name:'Blogs 3'
  },
  {
    id:4,
    img:blogs3,
    name:'Blogs 3'
  }]
  return (
   <Container>
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'20px',width:'100%'}}>
       <Typography variant={isMobileView?'h3':'h2'}>Oue Latest Blogs Posts</Typography>
         
       <Box sx={{display:'flex',width:'100%',flexDirection:'row',gap:'70px',alignItems:'center',justifyContent:'center',margin:'20px'}}>
       <Grid container spacing={2}>
        {data.map((ele)=>(
          <Grid key={ele.id} item xs={12} sm={6} md={4} lg={3} >
          <Card sx={{ width:'100%' }}>
          <CardMedia
            sx={{ height: 160}}
            image={ele.img}
            title="green iguana"
          />
          <CardActions sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
            <Typography variant='h6' sx={{color:'text.primary'}}>{ele.name}</Typography>
            <Button sx={{textTransform:'none'}}>Book now</Button>
          </CardActions>
        </Card>
        </Grid>
        ))}
     </Grid>
       </Box>
    </Box>
   </Container>
  )
}

export default Blogs