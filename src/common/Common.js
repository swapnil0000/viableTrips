import React from 'react';
import { Box, Container } from '@mui/material';

const FlexCenter = ({ children }) => {
  return (
    <Box display="flex" flexDirection='row' alignItems="center" justifyContent="space-between" width='100%' >
      {children}
    </Box>
  );
};
console.log("SWAPNIL SRIVASTAVA")

const FlexCenterColoum=({children})=>{
  return(
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>{children}</Box>
  )
  }

const FlexRow=({children,...props})=>{
    return (
        <Box display='flex' flexDirection='row' gap='30px' {...props}>
         {children}
        </Box>
    )
}

const Button =({children,...props})=>{
    return(
        <button style={{backgroundColor:'#008768'}} {...props}>{children}</button>
    )
}

export {FlexCenter,FlexRow,Button,FlexCenterColoum} ;


