// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import { Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';


// const useStyle = makeStyles({
//   Typography: {
//     '&:hover': {
//       color: 'rgb(212, 228, 255)'
//     }
//   },
// })

// const Navbar = () => {
  
//   const classes = useStyle()
//   const role = localStorage.getItem('trackfinity-role')

//   return (
//       <>
      

// <div class="p-1 border-gray-200 rounded bg-white/20 backdrop-blur-2xl dark:border-gray-700">
//   <div class="container flex flex-wrap items-center justify-between mx-auto">
//     <a href="/" class="flex items-center">
//         <img src="https://icons-for-free.com/iconfiles/png/512/insights-131988545603663490.png" class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
//         <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Trackfinity</span>
//     </a>
//     <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
//       <span class="sr-only">Open main menu</span>
//       <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//     </button>
//     <div class="mb-2 hidden w-full md:block md:w-auto" id="navbar-solid-bg">
//       <ul class="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
//         <li>
//                 {/* <a href="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a> */}
//                 <Typography component={Link} to={"/"} className={classes.Typography} sx={{ mx: 2, color: 'white', display: 'flex', textDecoration: 'none', }}>
//                 Home
//                 </Typography>
//         </li>
//         <li>
//         <Typography component={Link} to={"/login"} className={classes.Typography} sx={{ mx: 2, color: 'white', display: 'flex', textDecoration: 'none', }}>
//                 Dashboard
//         </Typography>
//         </li>
//         <li>
//         {role && <Typography component={Link} to={"/"} onClick={() => {
//               localStorage.removeItem("trackfinity-role");
//             }} className={classes.Typography}
//               sx={{ mx: 2, color: 'white', display: 'flex', textDecoration: 'none', }}>
//               Logout
//             </Typography>}
//         </li>      
//         {/* <li>
//           <a href="#" class="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
//         </li>
//         <li>
//           <a href="#" class="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
//         </li> */}
//       </ul>
//     </div>
//   </div>
// </div>

//       </>
//   )
// }

// export default Navbar

import { InsightsOutlined, MenuOpen } from '@mui/icons-material';
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import { Alert, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import "../App.css"

const useStyle = makeStyles({
  Typography: {
    '&:hover': {
      color: 'rgb(212, 228, 255)'
    }
  },
})

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const classes = useStyle()
  const navigate = useNavigate()

  const role = localStorage.getItem('trackfinity-role')

  return (
    <AppBar className="header" position="static" sx={{ top:"0",zIndex:"10",background:"rgba(255, 255, 255, 0)",boxShadow:"0 8px 32px 0 rgba(0, 0, 0, 0.18)",backdropFilter:"blur(50px)",position:"fixed" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src="https://icons-for-free.com/iconfiles/png/512/insights-131988545603663490.png" class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',

            }}
          >
            Trackfinity
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuOpen />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}

              <MenuItem onClick={() => { }} style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component={Link} to="/login"
                  sx={{ my: 2, mx: 1, color: 'black', display: 'flex', textDecoration: 'none', }}>
                  Login
                </Typography>
              </MenuItem>

              {/* <MenuItem onClick={handleCloseNavMenu} style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component={Link} to="/classroom"
                  sx={{ my: 2, mx: 1, color: 'black', display: 'flex', textDecoration: 'none', }}>
                  Classroom
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component={Link} to="/notices"
                  sx={{ my: 2, mx: 1, color: 'black', display: 'flex', textDecoration: 'none', }}>
                  Notices
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component={Link} to="https://trackfinity.netlify.app/"
                  sx={{ my: 2, mx: 1, color: 'black', display: 'flex', textDecoration: 'none', }}>
                  Video Calling
                </Typography>
              </MenuItem> */}

            </Menu>
          </Box>
          <InsightsOutlined sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Trackfinity
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            {role && <><Typography component={Link} to="about" className={classes.Typography}
              sx={{ my: 2, mx: 2, color: 'white', display: 'flex', textDecoration: 'none' }}>
              About
            </Typography>
            <Typography component={Link} to={"dashboard"} className={classes.Typography}
              sx={{ my: 2, mx: 2, color: 'white', display: 'flex', textDecoration: 'none', }}>
              Dashboards
            </Typography></>}
            {!role && <><Typography component={Link} to={"login"} className={classes.Typography}
              sx={{ my: 2, mx: 2, color: 'white', display: 'flex', textDecoration: 'none', }}>
              Login
            </Typography>
            <Typography component={Link} to={"register"} className={classes.Typography}
              sx={{ my: 2, mx: 2, color: 'white', display: 'flex', textDecoration: 'none', }}>
              Register
            </Typography></>}


            {/* {orgName && <>
              <Typography component={Link} to="/classroom" className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Classroom
              </Typography>
              <Typography component={Link} to={role === "Student" ? "/subjects" : "/courses"} state={role === "Student" && { id: JSON.parse(localStorage.getItem("profile")).courseid }} className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Courses
              </Typography>
              <Typography component={Link} to="/assignedtests" className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Tests
              </Typography>
              <Typography component={Link} to="/notices" className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Notices
              </Typography>
              {JSON.parse(localStorage.getItem("role")) !== "Student" && JSON.parse(localStorage.getItem("role")) !== "Parent" && <Typography component="a" href="https://trackfinity.netlify.app/"
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Video Calling
              </Typography>}
              {JSON.parse(localStorage.getItem("role")) === "Student" && <Typography component="a" href="http://webknights.pythonanywhere.com/profile" className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Profile
              </Typography>}
              <Typography component="a" href="https://google-calendar-clone.netlify.app/" className={classes.Typography}
                sx={{ my: 2, mx: 1, color: 'white', display: 'flex', textDecoration: 'none', }}>
                Calendar
              </Typography>
              {JSON.parse(localStorage.getItem("role")) !== "Student" && JSON.parse(localStorage.getItem("role")) !== "Parent" && JSON.parse(localStorage.getItem("role")) !== "Developer" && <Typography component="a" href="http://webknights.pythonanywhere.com/classes"
                sx={{ my: 2, mx: 1, color: 'black', display: 'flex', textDecoration: 'none', }}>
                Classes
              </Typography>} */}
            {/* </>} */}


            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button> 
            ))}*/}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {role && <Typography component={Link} to={"/"} onClick={() => {
              localStorage.removeItem("trackfinity-role");
              localStorage.removeItem("trackfinity-user");
            }} className={classes.Typography}
              sx={{ my: 2, mx: 2, color: 'white', display: 'flex', textDecoration: 'none', }}>
              Logout
            </Typography>}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  )
}

export default Navbar