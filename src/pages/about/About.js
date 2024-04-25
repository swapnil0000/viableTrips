import { Avatar, Box, Container, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Banner from '../../components/banner/Banner'
import img from "../about/aboutBanner.png"
import member1 from "../about/member1.png"
import member2 from "../about/member2.png"
import member3 from "../about/member3.png"
import member4 from "../about/member4.png"

const About = () => {
  const theme=useTheme();
  return (
    <Container>

     <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
     <Banner img={img}/>
     <Typography sx={{marginTop:'20px'}} variant='h3'>Our Mission</Typography>

     <Typography variant='h6'>Lorem ipsum dolor sit amet consectetur. Id nullam nisi lacinia rhoncus tincidunt nec. 
     Pretium dolor amet viverra tincidunt bibendum. 
     Platea eu porta phasellus in. Hendrerit viverra vitae velit facilisis at. Accumsan leo cursus nec mattis mi sed. 
     Et ipsum risus ridiculus morbi. Turpis mauris eleifend libero amet convallis quis dis scelerisque. Tincidunt tortor convallis turpis amet dapibus rhoncus ultrices id. 
     Non nisl aliquet interdum imperdiet. Vulputate tellus egestas diam id. Nullam nibh ullamcorper et quis sit est vulputate. 
     Justo integer sem viverra commodo cras lectus elementum in varius. Quisque mattis eu tellus urna sem urna. Cursus dolor congue blandit aliquet augue. Odio cursus sed mattis sem. Maecenas sed ut auctor condimentum. Urna neque blandit egestas habitant donec. 
     Eu vitae penatibus ut dapibus enim vitae. Neque nec id sagittis sed egestas volutpat fermentum pellentesque consectetur. Posuere ullamcorper sagittis sem egestas aliquet maecenas. Convallis molestie dolor tellus aliquam venenatis id. Pretium scelerisque velit orci mattis sed aliquet nunc est morbi. 
     Mattis diam enim vivamus nunc eget volutpat sed. Tortor consectetur tristique lacinia sed aliquam. Duis maecenas lectus sed nullam lorem. Vulputate in mattis sit dignissim tincidunt fringilla fermentum. Ultrices vestibulum eget cursus cursus egestas. 
     Accumsan ut at arcu proin nisl mauris amet etiam.</Typography>
    
     <Stack direction="row" sx={{gap:{lg:'160px',md:'100px',sm:'80px',xs:'40px'}}}>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'50px'}}>
      <Typography variant='h5' color="text.success">1300 + </Typography>
      <Typography variant='h6'> Travel Buddy</Typography>
      </Box>

      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'50px'}}>
      <Typography variant='h5' color="text.success">128 + </Typography>
      <Typography variant='h6'> Employees</Typography>
      </Box>

      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'50px'}}>
      <Typography variant='h5' color="text.success">5204 + </Typography>
      <Typography variant='h6'> Users</Typography>
      </Box>

      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'50px'}}>
      <Typography variant='h5' color="text.success">4680 + </Typography>
      <Typography variant='h6'> Travel Journey</Typography>
      </Box>
     </Stack>
 
     <Box sx={{width:'100%',height:{lg:'400px',md:'300px',sm:'280px',xs:'250px'},background: 'rgba(230, 243, 240, 1)',display:'flex',flexDirection:'column',alignItems:'center',marginTop:'20px'}}>

     <Typography sx={{backgroundColor:'transparent'}} variant='h3'>Meet Our Leader</Typography>

     <Typography variant='h6'>Lorem ipsum dolor sit amet consectetur. 
     Id nullam nisi lacinia rhoncus tincidunt nec. Pretium dolor amet viverra tincidunt bibendum. 
     Platea eu porta phasellus in. Hendrerit viverra vitae velit facilisis at. Accumsan leo cursus nec mattis mi sed. Et ipsum risus ridiculus morbi. 
     Turpis mauris eleifend libero amet convallis quis dis scelerisque. Tincidunt tortor convallis turpis amet dapibus rhoncus ultrices id. </Typography>


     <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:{lg:'60px',md:'60px',sm:'40px',xs:'30px'},backgroundColor:'transparent',marginTop:'30px'}}>
      <Box sx={{backgroundColor:'transparent'}}>
      <Avatar  sx={{ width: {lg:180 , md:150 , sm:100,xs:50}, height: {lg:180 , md:150 , sm:100,xs:50} }} sizes='1.15rem' src={member1}/>
      
      </Box>

      <Box sx={{backgroundColor:'transparent'}}>
      <Avatar sx={{ width: {lg:180 , md:150 , sm:100,xs:50}, height: {lg:180 , md:150 , sm:100,xs:50} }} src={member2}/>
      
      </Box>

      <Box sx={{backgroundColor:'transparent'}}>
      <Avatar  sx={{ width: {lg:180 , md:150 , sm:100,xs:50}, height: {lg:180 , md:150 , sm:100,xs:50} }} src={member3}/>
      
      </Box>

      <Box sx={{backgroundColor:'transparent'}}>
      <Avatar sx={{ width: {lg:180 , md:150 , sm:100,xs:50}, height: {lg:180 , md:150 , sm:100,xs:50} }} src={member4}/>
      
      </Box>
     </Box>
     </Box>
     <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
     <Typography variant='h3'>Our Startup Journey</Typography>

     <Typography variant='h6'>Lorem ipsum dolor sit amet consectetur. 
     Id nullam nisi lacinia rhoncus tincidunt nec. Pretium dolor amet viverra tincidunt bibendum. 
     Platea eu porta phasellus in. Hendrerit viverra vitae velit facilisis at. Accumsan leo cursus nec mattis mi sed. Et ipsum risus ridiculus morbi. 
     Turpis mauris eleifend libero amet convallis quis dis scelerisque. 
     Tincidunt tortor convallis turpis amet dapibus rhoncus ultrices id. 
     Non nisl aliquet interdum imperdiet. Vulputate tellus egestas diam id. 
     Nullam nibh ullamcorper et quis sit est vulputate. Justo integer sem viverra commodo cras lectus elementum in varius. 
     Quisque mattis eu tellus urna sem urna. Cursus dolor congue blandit aliquet augue. Odio cursus sed mattis sem. Maecenas sed ut auctor condimentum. Urna neque blandit egestas habitant donec. 
     Eu vitae penatibus ut dapibus enim vitae. Neque nec id sagittis sed egestas volutpat fermentum pellentesque consectetur. 
     Posuere ullamcorper sagittis sem egestas aliquet</Typography>
     </Box>

     </Box>
    </Container>
  )
}

export default About