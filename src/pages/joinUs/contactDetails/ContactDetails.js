import React, { useState } from 'react'
import { FlexCenterColoum } from '../../../common/Common'
import { TextField } from '@mui/material'

const ContactDetails = () => {
    const [contactDetails, setContactDetails] = useState({
        name: '',
        email: '',
        mobileNo: '',
        place: ''
      });
      const handleChange = (event) => {
        const { name, value } = event.target;
        setContactDetails({
          ...contactDetails,
          [name]: value
        });
      };
    
  return (
    <FlexCenterColoum>
    <TextField
    style={{width:'350px',height:'40px',borderRadius:'3px',margin:'40px'}}
      name="name"
      label="Name"
      value={contactDetails.name}
      onChange={handleChange}  
      helperText="Enter your name"
    />

    <TextField
      sx={{width:'350px',height:'40px',borderRadius:'3px',margin:'40px'}}
      name="email"
      label="Email"
      value={contactDetails.email}
      onChange={handleChange}  
      helperText="Enter your email"   
    />

    <TextField
    style={{width:'350px',height:'40px',borderRadius:'3px',margin:'40px'}}
      name="mobileNo"
      label="Message"
      helperText="Type your message"
      value={contactDetails.mobileNo}
      onChange={handleChange}/>  

    <TextField
      name="place"
      label="Place"
      value={contactDetails.place}
      onChange={handleChange}
      sx={{
        width: '350px',
        borderRadius: '3px',
        margin: '40px',
      }}
      helperText="Please select your city"/>
  </FlexCenterColoum>
  )
}

export default ContactDetails