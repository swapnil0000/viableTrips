import { Box, Divider, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import google from "../login/Group.png"
import Otp from './Otp';

export default function Login({ open, setOpen }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [otp,setOtp]=useState(false);
    

    const handleSendOTP = () => {
        // Handle sending OTP logic here
        setOpen(false);
        setOtp(true)

        console.log('Sending OTP...');
    };

    const handleContinueWithGoogle = () => {
        // Handle continue with Google (Gmail) logic here
        console.log('Continue with Google...');
    };

    return (
        < >
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={()=>setOpen(false)}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogContent>
                    <Typography variant="h3" align="center" >
                        Login with Mobile Number
                    </Typography>
                    <TextField
                        sx={{marginTop:'50px'}}
                        fullWidth
                        label="Contact Number"
                        placeholder="Enter your mobile number"
                        variant="outlined"
                        helperText='Please enter you 10 digit mobile number'
                        
                    />
                    <Divider sx={{ marginY: 2 }}>
                        <Typography variant="body1" color="text.secondary" align="center">
                            or
                        </Typography>
                    </Divider>
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={handleContinueWithGoogle}
                        sx={{ marginBottom: 1, backgroundColor: 'transparent', gap: '20px', color: 'black',marginTop:'20px' }}
                    >
                        <img style={{ width: '18px' }} src={google} />
                        <Typography sx={{color:'rgba(30, 31, 33, 1)', display: 'flex', alignItems: 'center', textTransform: 'none',fontWeight:'500',lineHeight:'29px' }}> Continue with google</Typography>

                    </Button>
                    <Button
                        sx={{ backgroundColor: 'black', color: 'white', textTransform: 'none', marginTop:'30px',
                        '&:hover': {
                            backgroundColor: 'black', // Set background color to black on hover
                          },
                    }}
                        fullWidth
                        variant="outlined"
                        onClick={handleSendOTP}
                        
                    >
                        Send OTP
                    </Button>
                    <Otp otp={otp} setOtp={setOtp}/>
                </DialogContent>
            </Dialog>
            <Otp otp={otp} setOtp={setOtp}/>
        </>
    );
}