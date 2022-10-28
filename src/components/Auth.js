import { Box, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import { useNavigate } from 'react-router-dom';
const Auth = () => {
    const navigate = useNavigate();
    const dispath = useDispatch();
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [isSignup, setIsSignup] = useState(false);
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const sendRequest = async (type = 'login') => {
        const res = await axios
            .post(`https://bloggfam.herokuapp.com/api/user/${type}`, {
                name: inputs.name,
                email: inputs.email,
                password: inputs.password,
            })
            .catch((err) => console.log(err));
        const data = await res.data;
        console.log(data);
        return data;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        if (isSignup) {
            sendRequest('signup')
                .then((data) => localStorage.setItem('userId', data.user._id))
                .then(() => dispath(authActions.login()))
                .then(() => navigate('/blogs'));
        } else {
            sendRequest()
                .then((data) => localStorage.setItem('userId', data.user._id))
                .then(() => dispath(authActions.login()))
                .then(() => navigate('/blogs'));
        }
    };
    return (
        <div
            style={{
                width: '100%',
                paddingTop: '20px',
                height: '38.8rem',
                backgroundColor: 'ghostwhite',
                margin: 'auto',
            }}
        >
            <form onSubmit={handleSubmit}>
                <Box
                    maxWidth={500}
                    display="flex"
                    flexDirection={'column'}
                    alignItems="center"
                    justifyContent={'center'}
                    boxShadow="10px 10px 20px #ccc"
                    padding={3}
                    margin="auto"
                    marginTop={8}
                    backgroundColor="#ECEEF2"
                    borderRadius={5}
                >
                    <Typography variant="h4" padding={3} textAlign="center">
                        {isSignup ? 'Signup' : 'Login'}
                    </Typography>

                    {isSignup && (
                        <TextField
                            name="name"
                            onChange={handleChange}
                            value={inputs.name}
                            placeholder="Name"
                            margin="normal"
                        />
                    )}
                    <TextField
                        name="email"
                        onChange={handleChange}
                        value={inputs.email}
                        type={'email'}
                        placeholder="Your Email"
                        margin="normal"
                    />
                    <TextField
                        name="password"
                        onChange={handleChange}
                        value={inputs.password}
                        type={'password'}
                        placeholder="Your Password"
                        margin="normal"
                    />
                    <Button
                        type="submit"
                        sx={{
                            borderRadius: 2,
                            marginTop: 3,
                            backgroundColor: '#393636',
                            color: 'ghostwhite',
                            padding: '10px 40px',
                            '&:hover': {
                               boxShadow: '2px 0.5px 4px black',
                               backgroundColor: '#393636',
                            },
                        }}
                    >
                        Sign In
                    </Button>
                    <Button
                   
                        onClick={() => setIsSignup(!isSignup)}
                        sx={{ borderRadius: 2, marginTop: 2, color: '#393636',
                        '&:hover': {
                            boxShadow: '2px 0.5px 4px black',
                            backgroundColor: '#393636',
                            color: 'ghostwhite',
                         },
                    }}
                    >
                        {isSignup ? 'proceed to login' : 'Create an account'}
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default Auth;
