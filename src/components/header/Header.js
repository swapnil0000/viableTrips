 // import { AppBar, Avatar, Box, Button, Container, CssBaseline, Drawer, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Popover, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
// import React, { useState } from 'react';
// import Logo from "../../assets/logo.png";
// import { FlexCenter, FlexRow } from '../../common/Common';
// import theme from '../../theme/theme';
// import { Link, useNavigate } from 'react-router-dom';
// import Login from '../../pages/login/Login';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// const Header = () => {
//   const [open, setOpen] = React.useState(false);
//   const [anchorEl, setAnchorEl] = useState(false);

//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobileView = useMediaQuery(theme.breakpoints.up('md'));

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleMenuClick = (event) => {
//     setAnchorEl(!anchorEl);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const openMenu = Boolean(anchorEl);
//   return (
//     <Container>
//       {!isMobileView && (
//         <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
//           <IconButton edge="start" color="inherit" aria-label="menu" sx={{ zIndex: 120 }} onClick={handleMenuClick}>
//             <MenuIcon />
//           </IconButton>
//           <Drawer
//             anchor="left"
//             elevation="200px"
//             open={openMenu}
//             onClose={handleClose}

//           >
//           <IconButton edge="start" color="inherit" aria-label="menu" sx={{ zIndex: 1203 }} onClick={handleMenuClick}>
//           <CloseIcon />
//         </IconButton>
//             <List >
//               <ListItem  onClick={handleClose}>
//                 <ListItemText >
//                   <Link style={{ textDecoration: 'none', color: 'black',fontSize:'16px' }} to="/" >Home</Link>
//                 </ListItemText>
//               </ListItem>
//               <ListItem onClick={handleClose}>
//                 <ListItemText>
//                   <Link style={{ textDecoration: 'none', color: 'black',fontSize:'16px' }} to="/join">Join Us</Link>
//                 </ListItemText>
//               </ListItem>
//               <ListItem  onClick={handleClose}>
//                 <ListItemText>
//                   <Link style={{ textDecoration: 'none', color: 'black' ,fontSize:'16px'}} to="/about" >About Us</Link>
//                 </ListItemText>
//               </ListItem>
              
//               <ListItem onClick={handleClose}>
//                 <ListItemText>
//                 <Link style={{ textDecoration: 'none', color: 'black' ,fontSize:'16px'}} to="/contact" >Contact Us</Link>
//                 </ListItemText>
//               </ListItem>
//               <ListItem onClick={handleClose}>
//                 <ListItemText>
//                 <Link style={{ textDecoration: 'none', color: 'black',fontSize:'16px' }} to="/blogs">Blogs</Link>
//                 </ListItemText>
//               </ListItem>
//               {/* Add more menu items as needed */}
//             </List>
//           </Drawer>
//           <img
//             style={{ cursor: 'pointer' }}
//             onClick={() => { navigate("/") }}
//             width="200px"
//             height="55px"
//             src={Logo}
//             alt='logo'
//           />
//           <Button onClick={handleClickOpen}>Login</Button>
//         </Box>
//       )}
//       {isMobileView && (
//         <FlexCenter>
//           <img
//             style={{ cursor: 'pointer' }}
//             onClick={() => { navigate("/") }}
//             width="200px"
//             height="55px"
//             src={Logo}
//             alt='logo'
//           />
//           <FlexRow sx={{ color: 'text.primary' }}>
//             <Typography>
//               <Link style={{ textDecoration: 'none', color: 'black' }} to="/" >Home</Link>
//             </Typography>
//             <Typography>
//               <Link style={{ textDecoration: 'none', color: 'black' }} to="/join">Join Us</Link>
//             </Typography>
//             <Typography>
//               <Link style={{ textDecoration: 'none', color: 'black' }} to="/about" >About Us</Link>
//             </Typography>
//             <Typography>
//               <Link style={{ textDecoration: 'none', color: 'black' }} to="/blogs">Blogs</Link>
//             </Typography>
//             <Typography>
//               <Link style={{ textDecoration: 'none', color: 'black' }} to="/contact" >Contact Us</Link>
//             </Typography>
//           </FlexRow>
//           <Button onClick={handleClickOpen}>Login</Button>
//         </FlexCenter>
//       )}
//       <Login open={open} setOpen={setOpen} />
//     </Container>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import Login from '../../pages/login/Login';
import { FlexCenter, FlexRow } from '../../common/Common';

import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.up('md'));

  const handleMenuClick = () => {
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  const handleLoginClick = () => {
    setOpen(true);
  };

  return (
    <Container>
     
      {!isMobileView && (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
          <IconButton  onClick={handleMenuClick}>
            {openMenu ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Drawer
            anchor="left"
            open={openMenu}
            onClose={handleClose}
          >
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ marginTop:'10px'}} onClick={handleMenuClick}>       
            <CloseIcon />
          </IconButton>
            <List>
              <MenuItemLink to="/" onClick={handleClose}>Home</MenuItemLink>
              <MenuItemLink to="/join" onClick={handleClose}>Join Us</MenuItemLink>
              <MenuItemLink to="/about" onClick={handleClose}>About Us</MenuItemLink>
              <MenuItemLink to="/contact" onClick={handleClose}>Contact Us</MenuItemLink>
              <MenuItemLink to="/blogs" onClick={handleClose}>Blogs</MenuItemLink>
              {/* Add more menu items as needed */}
            </List>
          </Drawer>
          <img
            style={{ cursor: 'pointer' }}
            onClick={() => { navigate("/") }}
            width="200px"
            height="55px"
            src={Logo}
            alt='logo'
          />
          <Button onClick={handleLoginClick}>Login</Button>
        </Box>
      )}
      {isMobileView && (
        <FlexCenter>
          <img
            style={{ cursor: 'pointer' }}
            onClick={() => { navigate("/") }}
            width="200px"
            height="55px"
            src={Logo}
            alt='logo'
          />
          <List sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <MenuItemLink to="/">Home</MenuItemLink>
            <MenuItemLink to="/join">Join</MenuItemLink>
            <MenuItemLink to="/about">About</MenuItemLink>
            <MenuItemLink to="/blogs">Blogs</MenuItemLink>
            <MenuItemLink to="/contact">Contact</MenuItemLink>
            {/* Add more menu items as needed */}
          </List>
          <Button onClick={handleLoginClick}>Login</Button>
        </FlexCenter>
      )}
      <Login open={open} setOpen={setOpen} />
    </Container>
  );
};

// Custom MenuItemLink component to handle routing with Link
const MenuItemLink = ({ to, children, onClick }) => {
  return (
    <ListItem onClick={onClick}>
      <ListItemText>
        <Link style={{ textDecoration: 'none', color: 'black', fontSize: '16px' }} to={to}>{children}</Link>
      </ListItemText>
    </ListItem>
  );
};

export default Header;

