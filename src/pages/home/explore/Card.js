import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
export default function Cards({img,name}) {
  return (
    <Card sx={{ width:'200px' }}>
      <CardMedia
        sx={{ height: 180 }}
        image={img}
        title="green iguana"
      />
      <CardActions sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
        <Typography variant='h5' sx={{color:'text.primary'}}>{name}</Typography>
        <Button sx={{textTransform:'none'}}>Book now</Button>
      </CardActions>
    </Card>
  );
}