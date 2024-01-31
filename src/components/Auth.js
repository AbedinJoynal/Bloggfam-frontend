import { Box, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Auth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({ name: '', email: '', password: '' });
    const [isSignup, setIsSignup] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const sendRequest = async (type = 'login') => {
        try {
            const res = await axios.post(
                `https://blogfam.onrender.com/api/user/${type}`,
                inputs
            );
            return res.data;
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong');
            toast.error(`${error.response?.data?.message}`);
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await sendRequest(isSignup ? 'signup' : 'login');
        if (data) {
            localStorage.setItem('userId', data.user._id);
            localStorage.setItem('userName', data.user.name);
            dispatch(authActions.login());
            toast.success('Logged in successfully!'); // Show success message
            navigate('/blogs');
        }
    };

    return (
        <div
            style={{
                width: '100%',
                paddingTop: '20px',
                height: '38.8rem',
                marginBottom: '2rem',
               
                fontFamily: '"Poppins", sans-serif',
            }}
        >
            <form onSubmit={handleSubmit}>
                <Box
                    maxWidth={500}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    padding={3}
                    margin="auto"
                    marginTop={8}
                >
                    <Typography
                        variant="h4"
                        fontWeight="semi-bold"
                        padding={3}
                        textAlign="center"
                        fontFamily="Poppins"
                        color="#393636"
                    >
                        {isSignup ? 'Signup' : 'Login'}
                    </Typography>

                    {isSignup && (
                        <TextField
                            name="name"
                            onChange={handleChange}
                            value={inputs.name}
                            placeholder="Name"
                            margin="normal"
                            sx={{
                                borderRadius: 2,
                                height: 40,
                                width: '100%',
                                mb: 2,
                            }}
                        />
                    )}
                    <TextField
                        name="email"
                        onChange={handleChange}
                        value={inputs.email}
                        type="email"
                        placeholder="Your Email"
                        margin="normal"
                        sx={{
                            borderRadius: 2,
                            height: 40,
                            width: '100%',
                            mb: 2,
                        }}
                    />
                    <TextField
                        name="password"
                        onChange={handleChange}
                        value={inputs.password}
                        type="password"
                        placeholder="Your Password"
                        margin="normal"
                        sx={{
                            borderRadius: 2,
                            height: 40,
                            width: '100%',
                            mb: 3,
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                            borderRadius: 2,
                            marginTop: 3,
                            fontFamily: 'Poppins',
                            color: '#ffffff',
                            bgcolor: '#393636',
                            padding: '10px 40px',
                            transition: '.3s ease-in-out',
                            '&:hover': {
                                bgcolor: '#2b2828',
                            },
                        }}
                    >
                        Sign In
                    </Button>
                    <Button
                        onClick={() => setIsSignup(!isSignup)}
                        sx={{
                            borderRadius: 2,
                            marginTop: 2,
                            textTransform: 'capitalize',
                            fontFamily: 'Poppins',
                            fontSize:   '17.8px',   
                            color: '#393636',
                            '&:hover': {
                                color: '#a2a4a7',
                            },
                        }}
                    >
                        {isSignup ? 'Proceed to Login' : 'Create an Account'}
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default Auth;
