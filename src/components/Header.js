import React, { useState } from 'react';
import {
    AppBar,
    Typography,
    Toolbar,
    Box,
    Button,
    Tabs,
    Tab,
    useMediaQuery,
    Drawer,
    List,
    ListItem,
    IconButton,
    ListItemButton,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';
import { useStyles } from './utils';
import { toast } from 'react-toastify';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue] = useState();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const userName = localStorage.getItem('userName');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const logoutHandler = () => {
        dispatch(authActions.logout());
        toast.success('Logged out successfully!');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        navigate('/auth');
    };

    const drawerHandler = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navigationLinks = (
        <>
            <Tab
                className={classes.font}
                LinkComponent={Link}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    fontSize: '16px',
                    textTransform: 'none',
                    color: '#393636 !important',
                    '&:hover': {
                        color: '#000000 !important',
                        backgroundColor: '#e1d9d1 !important',
                        borderRadius: '5px',
                    },
                    fontFamily: '"Poppins", sans-serif',
                }}
                to="/blogs"
                label="Home"
            />
            <Tab
                className={classes.font}
                LinkComponent={Link}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    fontSize: '16px',
                    textTransform: 'none',
                    color: '#393636 !important',
                    '&:hover': {
                        color: '#000000 !important',
                        backgroundColor: '#e1d9d1 !important',
                        borderRadius: '5px',
                    },
                    fontFamily: '"Poppins", sans-serif',
                }}
                to="/myBlogs"
                label="Explore"
            />
            <Tab
                className={classes.font}
                LinkComponent={Link}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    fontSize: '16px',
                    textTransform: 'none',
                    color: '#393636 !important',
                    '&:hover': {
                        color: '#000000 !important',
                        backgroundColor: '#e1d9d1 !important',
                        borderRadius: '5px',
                    },
                    fontFamily: '"Poppins", sans-serif',
                }}
                to="/blogs/add"
                label="Post"
            />
        </>
    );

    return (
        <AppBar
            position="sticky"
            sx={{
                background: '#fff',
                width: '100%',
                flexWrap: 'wrap',
                justifyContent: 'center',
                flexShrink: 1,
                flexBasis: 'auto',
            }}
        >
            <Toolbar>
                <Typography
                    sx={{
                        color: '#393636 !important',
                        fontWeight: 'bold',
                        fontSize: '24px',
                        fontFamily: '"Poppins", sans-serif',
                        letterSpacing: '0.05em',
                        lineHeight: '72px',
                    }}
                >
                    BlogFam
                </Typography>
                {isLoggedIn && (
                    <Box
                        marginLeft="auto"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap="20px"
                    >
                        {isMobile ? (
                             <>
                             <IconButton
                                 edge="start"
                                 sx={{ color: '#393636 !important' }}
                                 aria-label="menu"
                                 onClick={drawerHandler}
                             >
                                 <MenuIcon />
                             </IconButton>
                             <Drawer
                                 anchor="right"
                                 open={drawerOpen}
                                 onClose={drawerHandler}
                             >
                                 <List>
                                     <ListItem
                                         sx={{
                                             fontSize: '1rem',
                                             fontFamily: '"Poppins", sans-serif',
                                             color: '#393636',
                                             padding: '1rem 1.5rem',
                                             justifyContent: 'center',
                                         }}
                                     >
                                         {userName}
                                     </ListItem>
                                     {navigationLinks}
                                     <ListItemButton
                                         onClick={logoutHandler}
                                         sx={{
                                             marginTop: '1rem',
                                             padding: '0.5rem 1.5rem',
                                             fontFamily: '"Poppins", sans-serif',
                                             borderRadius: 1,
                                             textAlign: 'center',
                                             textTransform: 'none',
                                             '&:hover': {
                                                 background: '#FFFFFF',
                                                 color: '#080B1A',
                                             },
                                         }}
                                         color="inherit"
                                     >
                                         Logout
                                     </ListItemButton>
                                 </List>
                             </Drawer>
                         </>
                        ) : (
                            <Tabs
                                value={value}
                                onChange={(e, val) => setValue(val)}
                                sx={{
                                    color: '#393636',
                                   
                                }}
                            >
                                {navigationLinks}
                            </Tabs>
                        )}
                        {!isMobile && isLoggedIn && (
                            <Box display="flex" alignItems="center">
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        alignSelf: 'center',
                                        marginRight: 2,
                                        color: '#393636',
                                        fontWeight: 'bold',
                                        fontSize: '1rem',
                                        padding: '0rem 1rem 0rem 1rem',
                                        borderRadius: '2rem',
                                        boxShadow:
                                            '0 0 0 0.1rem rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    {userName}
                                </Typography>
                                <Button
                                    onClick={logoutHandler}
                                    sx={{
                                        margin: '1',
                                        fontFamily: '"Poppins", sans-serif',
                                        borderRadius: 2,
                                        boxShadow: '2px 0.5px 4px black',
                                        textTransform: 'none',
                                        backgroundColor: '#393636',
                                        '&:hover': {
                                            background: '#FFFFFF',
                                            color: '#080B1A',
                                        },
                                    }}
                                    color="inherit"
                                >
                                    Logout
                                </Button>
                            </Box>
                        )}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
