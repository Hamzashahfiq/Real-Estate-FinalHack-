import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import ProgressLoader from '../progressLoader/ProgressLoader';
import useCommonHeader from './useCommonHeader';
import { Link } from "react-router-dom";
import CH from './CommonHeaderStyle'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

export default function CommonHeader(props: Props) {
    const isAllowed = useSelector((store) => store.AuthSlice.isAllowed);
    const { logoutLoading, LogoutHandler } = useCommonHeader()
    const drawerWidth = 240;
    let navTab;
    let navName;
    if (isAllowed) {
        navTab = 'Logout';
        navName = '/logout'
    } else {
        navTab = 'Login';
        navName = '/login'
    }
    const navItems = [{ name: 'Home', link: '/', func: null },{ name:'Add Property' , link: '/addPropertyInput' } ,{ name: navTab, link: navName, func: LogoutHandler }];
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Real State
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={item.name} disablePadding>
                        <CH.HDLink to={item.link}
                            onClick={item.func}
                            style={({ isActive }) =>
                                isActive ? CH.activeStylehd : undefined
                            } >
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </CH.HDLink>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex', position: 'fixed', width: '100%', zIndex: '5000' }}>
            <AppBar component="nav" sx={{ backgroundColor: '#264653', }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Real State
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (

                            // <Button key={item.name} sx={{ color: '#fff' }} onClick={item.func}>
                            <CH.HLink to={item.link}
                                onClick={item.func}
                                style={({ isActive }) =>
                                    isActive ? CH.activeStyle : undefined
                                } > {item.name} </CH.HLink>
                            // </Button>
                        ))}
                    </Box>
                    {/* <Box sx={{ display: 'inline-block' }}>

                        <CH.HLink to='cart'
                            style={({ isActive }) =>
                                isActive ? CH.activeStyle : undefined
                            } >
                            <IconButton aria-label="delete" sx={{ color: 'White' }}>
                                <AddShoppingCartIcon />
                            </IconButton>
                        </CH.HLink>

                    </Box> */}
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box >
    );
}








