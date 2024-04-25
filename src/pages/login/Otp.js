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
import DetialsUser from './DetialsUser';

export default function Otp({ otp, setOtp }) {
    const [details,setDetials]=useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        setOtp(false);
        setDetials(true)
    };

    return (
        < >
            <Dialog
                fullScreen={fullScreen}
                open={otp}
                onClose={handleClose}

                aria-labelledby="responsive-dialog-title"
            >
                <DialogContent>
                    <Typography variant="h3" align="center" >
                        Enter OTP
                    </Typography>
                    <TextField
                      sx={{marginTop:'50px'}}
                        fullWidth
                        label="OTP"
                        placeholder="Type 5 digit OTP"
                        variant="outlined"
                        helperText="Please enter 5 digit OTP recived on your enter mobile number"
                    />
                    <Divider sx={{ marginY: 2 }}>
                        <Typography variant="body1" color="text.secondary" align="center">
                            or
                        </Typography>
                    </Divider>
                    
                    <Button
                        sx={{ backgroundColor: 'black', color: 'white', textTransform: 'none', marginTop:'30px',
                        '&:hover': {
                            backgroundColor: 'black', // Set background color to black on hover
                          },
                    }}
                        fullWidth
                        variant="outlined"
                        onClick={handleClose}
                    >
                        Verify
                    </Button>
                </DialogContent>
            </Dialog>
            <DetialsUser open={details} setDetials={setDetials}/>
        </>
    );
}