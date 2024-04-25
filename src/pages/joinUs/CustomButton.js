import { Button, useTheme } from '@mui/material';
import React from 'react';

function CustomButton(props) {
    const theme=useTheme();

  return (
    <Button >{props}</Button>
  );
}

export default CustomButton;