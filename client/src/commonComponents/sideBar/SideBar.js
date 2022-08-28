import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import AddPage from '../../pages/addProperty/addPropertyInput/AddPage';
import DelProperty from '../../pages/addProperty/delProduct/DelProperty';


const drawerWidth = 240;
const activeStyle = {
  textDecoration: "none",
  width: '100%',
  color: 'blue',
}
export default function SideBar({ pageName }) {
  return (
    <Box sx={{ display: 'flex', boxSizing: 'border-box', margin: '0px', padding: '0px' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {[{ name: 'Add Property', icon: <AccountBalanceIcon />, path: '/AddPropertyInput' }, { name: 'Delete Property', icon: <DeleteOutlineIcon />, path: '/delProduct' }].map((text, index) => (
            <ListItem key={text} disablePadding>
              <NavLink to={text.path} style={({ isActive }) => isActive ? activeStyle : { textDecoration: 'none', width: '100%', color: 'black' }}>
                <ListItemButton>
                  <ListItemIcon>
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', background: 'linear-gradient(to right, #4ac29a, #bdfff3)', minHeight: '100vh', boxSizing: 'border-box', margin: '0px', padding: '0px' }}
      >
        {pageName === 'addProperty' &&
          <Box sx={{ pt: 12, }}>
            <AddPage />
          </Box>
        }
        {pageName === 'delProduct' &&
          <Box sx={{ pt: 12 }}>
            <DelProperty />
          </Box>
        }

      </Box>
    </Box>
  );
}
