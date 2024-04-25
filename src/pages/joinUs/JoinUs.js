import React, { useState } from 'react';
import "./Stepper.css"
import contactImg from "../joinUs/contact.png"
import personalImg from "../joinUs/personal.png"
import verificationImg from "../joinUs/verification.png"
import CustomButton from './CustomButton';
import { FlexCenter, FlexCenterColoum } from '../../common/Common';
import { Avatar, Button, Step, StepIcon, StepLabel, Stepper, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import ContactDetails from './contactDetails/ContactDetails';
import PersonalDetails from './personalDetails/PersonalDetails';
import Verification from './verification/Verification';
function JoinUs() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.up("sm"));
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
      <Box >
        {
          activeStep === 0 && isMobileView && <Avatar sx={{ width: { lg: '500px', md: '400px', sm: '300px', borderRadius: '0px' }, height: { lg: '500px', md: '400px', sm: '300px' } }} src={contactImg} />
        }
        {
          activeStep === 1 && isMobileView && <Avatar sx={{ width: { lg: '500px', md: '400px', sm: '300px' }, borderRadius: '0px', height: { lg: '500px', md: '400px', sm: '300px' } }} src={personalImg} />
        }
        {
          activeStep === 2 && isMobileView && <Avatar sx={{ width: { lg: '500px', md: '400px', sm: '300px' }, borderRadius: '0px', height: { lg: '500px', md: '400px', sm: '300px' } }} src={verificationImg} />
        }
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: { lg: '600px', md: '500px', sm: '400px' }, marginTop: '30px' }}>
          {
            activeStep !== 3 &&
            <Stepper sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: 'green', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                {
                  color: 'grey.500', // Just text label (COMPLETED)
                },
              '& .MuiStepLabel-root .Mui-active': {
                color: 'grey', // circle color (ACTIVE)
              },
              '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                {
                  color: 'grey', // Just text label (ACTIVE)
                },
              '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                fill: 'black', // circle's number (ACTIVE)
              },
            }} alternativeLabel activeStep={activeStep}>
              <Step>
                <StepLabel>ContactDetails</StepLabel>
              </Step>
              <Step>
                <StepLabel>PresonalDetails</StepLabel>
              </Step>
              <Step>
                <StepLabel>Verification</StepLabel>
              </Step>
            </Stepper>
          }
        </Box>

        <Box style={{ marginTop: '15px' }}>
          {activeStep === 0 && (
            <ContactDetails />
          )}
          {activeStep === 1 && (
            <PersonalDetails />
          )}
          {activeStep === 2 && (
            <Verification />
          )}
          {activeStep === 3 &&
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}}>
              <Typography>Thankyou for submit </Typography>
            </Box>
          }
        </Box>
        <Box>
          {activeStep === 3 && <Button onClick={()=>{navigate("/")}}  disableRipple sx={{ backgroundColor: 'green' }}>Home</Button>
          }
          {activeStep !== 0 && activeStep !== 3 && (
            <Button variant='contained' color='success' sx={{ backgroundColor: 'green', gap: '10px', margin: '10px', borderRadius: '2px' }} onClick={handleBack}>Back</Button>
          )}
          {activeStep !== 3 && (
            <Button variant='contained' color='success' sx={{ backgroundColor: 'green', gap: '10px', margin: '10px', borderRadius: '2px' }} onClick={handleNext}>
              {activeStep === 2 ? 'Finish' : 'Save & Continue'}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}
export default JoinUs;
