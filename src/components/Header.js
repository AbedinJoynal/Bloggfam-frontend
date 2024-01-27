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
        navigate('/auth');
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                background: '#393636',
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                flexShrink: 1,
                flexBasis: 'auto',
            }}
        >
            <Toolbar>
                <Typography
                    sx={{
                        textTransform: 'uppercase',
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        fontSize: '24px',
                        fontFamily: 'Montserrat',
                        letterSpacing: '0.05em',
                        lineHeight: '72px',
                    }}
                >
                    BlogFam
                </Typography>
                {isLoggedIn && (
                    <Box
                        marginLeft={'auto'}
                        paddingRight={'auto'}
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            flexShrink: 1,
                            flexBasis: 'auto',
                            gap: '20px',
                        }}
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
                                    borderRadius: '5px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#393636',
                                    '&:hover': {
                                        background: '#FFFFFF',
                                        color: '#080B1A',
                                    },
                                }}
                                to="/blogs"
                                label="All Blogs"
                            />
                            <Tab
                                className={classes.font}
                                LinkComponent={Link}
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    borderRadius: '5px',
                                    backgroundColor: '#393636',
                                    '&:hover': {
                                        background: '#FFFFFF',
                                        color: '#080B1A',
                                    },
                                }}
                                to="/myBlogs"
                                label="My Blogs"
                            />
                            <Tab
                                className={classes.font}
                                LinkComponent={Link}
                                sx={{
                                    borderRadius: '5px',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    backgroundColor: '#393636',
                                    '&:hover': {
                                        background: '#FFFFFF',
                                        color: '#080B1A',
                                    },
                                }}
                                to="/blogs/add"
                                label="Add Blog"
                            />
                        </Tabs>
                    </Box>
                )}
                <Box display="flex" marginLeft="auto">
                    {isLoggedIn ? (
                        <>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    alignSelf: 'center',
                                    marginRight: 2,
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem',
                                }}
                            >
                                {userName}
                            </Typography>
                            <Button
                                onClick={logoutHandler}
                                sx={{
                                    margin: '1',
                                    borderRadius: 2,
                                    boxShadow: '2px 0.5px 4px black',
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
                    ) : null}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
