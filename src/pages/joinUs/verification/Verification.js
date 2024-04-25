import styled from '@emotion/styled';
import { Avatar, Badge, Box, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Verification = () => {
  
    const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Process the uploaded file here, e.g., upload it to a server
    console.log('Uploaded file:', file);
  };

    const [verification, setVerification] = useState({
        accountno:{},
        ifsc: '',
        adhaar: {},
        drivinglicence: ''
      });  

  const handleVerification = (event) => {
    const { name, value } = event.target;
    setVerification({
      ...verification,
      [name]: value
    });
  };
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));
  return (
    <Box  style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:"center"}}>
    <Badge
    overlap="circular"
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    badgeContent={
      <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    }
  >
    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  </Badge>
      <TextField
      type='number'
      style={{width:'350px',height:'40px',borderRadius:'3px',margin:'40px'}}
        name="accountno"
        label="Account No"
        value={setVerification.accountno}
        onChange={handleVerification}
        placeholder=' 2244113324556'
        helperText=" Enter bank account no"
      />
      <TextField
        style={{width:'350px',height:'40px',borderRadius:'3px',margin:'40px'}}
        name="ifsc"
        placeholder=' SBI0012432'
        label="IFSC"
        value={setVerification.ifsc}
        onChange={handleVerification} 
        helperText="Enter IFSC code"    
      />
     
      <TextField
      sx={{width:'350px',height:'40px',outline:'none',borderRadius:'3px',margin:'40px'}}

        type='file'
        name="adhaar"
        placeholder='Drag your Adhhar'
        label='Adhaar Card'
        InputLabelProps={{ shrink: true }} // Ensure label floats when file is selected
        onChange={handleFileUpload}
        value={setVerification.adhaar}
        helperText="File Supported: PDF,XSLS,Image,Scanner"
        
      />
      <TextField
      style={{width:'350px',height:'40px',borderRadius:'3px',margin:'40px'}}
        name="drivinglicence"
        type='file'
        InputLabelProps={{ shrink: true }} // Ensure label floats when file is selected
        label="Driving Licence"
        value={setVerification.drivinglicence}
        onChange={handleVerification}
        helperText="File Supported: PDF,XSLS,Image,Scanner"
      />
    </Box>

  )
}

export default Verification