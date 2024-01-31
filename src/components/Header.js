import React, { useState } from 'react';
import {
    AppBar,
    Typography,
    Toolbar,
    Box,
    Button,
    Tabs,
    Tab,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';
import { useStyles } from './utils';
import { toast } from 'react-toastify';

const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue] = useState();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const userName = localStorage.getItem('userName');

    const logoutHandler = () => {
        dispatch(authActions.logout());
        toast.success('Logged out successfully!');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        navigate('/auth');
    };

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
                        color: '#393636',
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
                        gap="20px"
                    >
                        <Tabs
                            textColor="white"
                            value={value}
                            onChange={(e, val) => setValue(val)}
                        >
                            <Tab
                                className={classes.font}
                                LinkComponent={Link}
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    fontSize: '16px',
                                    textTransform: 'none',
                                    color: '#080B1A',
                                    '&:hover': {
                                        background: '#FFFFFF',
                                    },
                                    fontFamily: '"Poppins", sans-serif',
                                }}
                                to="/blogs"
                                label="Home"
                            />{' '}
                            <Tab
                                className={classes.font}
                                LinkComponent={Link}
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    fontSize: '16px',
                                    textTransform: 'none',
                                    color: '#080B1A',
                                    '&:hover': {
                                        background: '#FFFFFF',
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
                                    color: '#080B1A',
                                    '&:hover': {
                                        background: '#FFFFFF',
                                    },
                                    fontFamily: '"Poppins", sans-serif',
                                }}
                                to="/blogs/add"
                                label="Post"
                            />
                        </Tabs>
                        {isLoggedIn && (
                            <>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        alignSelf: 'center',
                                        marginRight: 2,
                                        color: '#080B1A',
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
                            </>
                        )}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
