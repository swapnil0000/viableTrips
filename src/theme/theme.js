import typography from "./typography"
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette:{
     primary:{
      main:'#000000'
     }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#4caf50', // Setting background color
          color: 'white', // Setting text color
        },

      },
    },
    MuiTextField:{
       variants:'outlined',
      styleOverrides:{
        root:{
          color:'black'
        },
      
      },
    },
  },
    // MuiStepLabel:{
    //   styleOverrides:{
    //     label:{
    //       color:"green",
    //       backgroundColor:'transparent'
    //    },
    //     },
    //   },
    //   MuiStepIcon:{
    //     styleOverrides:{
    //       root:{
    //         color:'green',
    //         backgroundColor:'transparent'
    //       },
    //       active:{
    //         color: 'green'
    //       },
    //       completed:{
    //         color:'green'
    //       }
    //     }
    //   }
    // },
  // palette:{
  //   mode:'dark',
  //   primary:{
  //       main:"#00000"
  //   },
  //   text:{
  //       primary:'#1E1F21',
  //       success:'#1EC24C',
  //       error:'#F63333',
  //       bgColor:'#E9E9E9'
  //   },
  //   background:{
  //       default:'#EEF0F5',
  //       footer:'#121212',
  //   },
  // },
  typography,
})


export default theme
