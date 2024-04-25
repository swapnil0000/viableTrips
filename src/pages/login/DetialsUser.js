import { Button, Dialog, DialogContent, Divider, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const DetialsUser = ({ open, setDetials }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClose = () => {
        setDetials(false)
    }
    return (
        <>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}

                aria-labelledby="responsive-dialog-title"
            >
                <DialogContent>
                    <Typography variant="h3" align="center" >
                        Enter Your Details
                    </Typography>
                    <TextField
                        sx={{ marginTop: '50px' }}
                        fullWidth
                        label="Name"
                        variant="outlined"
                        helperText="Please enter your name"
                    />

                    <TextField
                        sx={{ marginTop: '50px' }}
                        fullWidth
                        label="Email"
                        variant="outlined"
                        helperText="Please enter your email"
                    />


                    <Typography variant='h6' sx={{ marginTop: '10px' }}>
                    By creating an account, I accept the&nbsp;
                    <Link to="/terms" style={{ color: 'blue' }}>Terms & Conditions</Link>
                    &nbsp;&amp;&nbsp;
                    <Link to="/privacy" style={{textDecorationLine:'underline', color: 'blue' }}>Privacy Policy</Link>
                  </Typography>

                    <Button
                        sx={{
                            backgroundColor: 'black', color: 'white', textTransform: 'none', marginTop: '30px',
                            '&:hover': {
                                backgroundColor: 'black', // Set background color to black on hover
                            },
                        }}
                        fullWidth
                        variant="outlined"
                        onClick={handleClose}
                    >
                        Continue
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default DetialsUser