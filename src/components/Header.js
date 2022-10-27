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
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import { useStyles } from './utils';
const Header = () => {
    const classes = useStyles();
    const dispath = useDispatch();
    const [value, setValue] = useState();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    return (
        <AppBar
            position="sticky"
            sx={{
                background: '#393636',
            }}
        >
            <Toolbar>
                <Typography
                    sx={{
                        textTransform: 'uppercase',
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        fontSize: '24px',
                        fontfamily: 'Montserrat',
                        letterSpacing: '0.05em',
                        lineHeight: '72px',
                    }}
                >
                    BlogFam
                </Typography>
                {isLoggedIn && (
                    <Box marginLeft={'auto'} marginRight={'10px'}>
                        <Tabs
                            textColor="white"
                            value={value}
                            onChange={(e, val) => setValue(val)}
                        >
                            <Tab
                                className={classes.font}
                                LinkComponent={Link}
                                sx={{
                                    borderRadius: '5px',
                                    marginRight: '50px',
                                    boxShadow: '3px 0px 4px black',
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
                                    borderRadius: '5px',
                                    marginRight: '50px',
                                    boxShadow: '3px 0px 4px black',
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
                                    marginRight: '50px',
                                    boxShadow: '3px 0px 4px black',
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
                    {!isLoggedIn && (
                        <>
                            <Button
                                LinkComponent={Link}
                                to="/auth"
                                sx={{
                                    margin: '1',
                                    borderRadius: 2,
                                    color: 'ghostwhite',
                                    marginRight: 1,
                                    '&:hover': {
                                        background: '#262626',
                                        boxShadow: '2px 0.5px 4px black',
                                        color: 'white',
                                        borderRadius: '8px',
                                    },
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                LinkComponent={Link}
                                to="/auth"
                                variant="outlined"
                                sx={{
                                    margin: '1',
                                    borderRadius: 2,
                                    marginRight: 1,
                                    '&:hover': {
                                        background: '#FFFFFF',
                                        color: '#080B1A',
                                        borderRadius: '8px',
                                    },
                                }}
                                color="inherit"
                            >
                                Signup
                            </Button>
                        </>
                    )}
                    {isLoggedIn && (
                        <Button
                            onClick={() => dispath(authActions.logout())}
                            LinkComponent={Link}
                            to="/auth"
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
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
