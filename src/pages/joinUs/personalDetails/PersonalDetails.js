import { Box, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react'

const PersonalDetails = () => {

  const genders = [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
    {
      value: 'Other',
      label: 'Other',
    },
  ];
  
  const smoker=[
    {
      value:'Yes',
      label:'Yes'
    },
    {
      value:'No',
      label:'No'
    }
  ]

    const [personalDetails,setPersonalDetials]=useState({
        language:'',
        dob:'',
        gender:'',
        problemsmoking:''
      })
    const handlePersonalDetails = (event) => {
        const { name, value } = event.target;
        setPersonalDetials({
          ...setPersonalDetials,
          [name]: value
        });
      };
  return (
    <Box  style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:"center"}}>
    <TextField
      style={{width:'350px',height:'40px',outline:'none',border:'none',backgroundColor:'rgba(2409, 250, 260, 1)',borderRadius:'3px',margin:'40px'}}
      name="language"
      label="Language"
      value={personalDetails.name}
      onChange={handlePersonalDetails}
      helperText=' English, German, Hindi'      
    />
    <TextField
      style={{width:'350px',height:'40px',margin:'40px'}}
      name="dob"
      label="DOB"
      InputLabelProps={{ shrink: true }} // Ensure label floats when file is selected
      type='date'
      value={personalDetails.email}
      onChange={handlePersonalDetails}  
      helperText="Enter Date of birth"   
    />
    <TextField
    sx={{width:'350px',height:'40px',margin:'40px'}}
      name="gender"
      select
      label="Gender"
      defaultValue="Male"
      value={personalDetails.mobileNo}
      onChange={handlePersonalDetails}
      helperText="Enter your gender"
      >
      {genders.map((option) => (
        <MenuItem sx={{fontSize:'15px'}} key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
      </TextField>

    <TextField
    style={{width:'350px',height:'40px',margin:'40px'}}
      name="problemsmoking"
      label="Smoking"
      select
      value={personalDetails.place}
      onChange={handlePersonalDetails}
      helperText="Problem with smoking"
  >
  {smoker.map((option) => (
    <MenuItem sx={{fontSize:'15px'}} key={option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ))}
   </TextField>
  </Box>
  )
}

export default PersonalDetails