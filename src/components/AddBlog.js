import {
    Box,
    Button,
    Grid,
    InputLabel,
    TextField,
    Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './utils';
import Footer from './Footer';

const labelStyles = {
    mb: 1,
    mt: 2,
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#393636',
};
const AddBlog = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        title: '',
        description: '',
        imageURL: '',
    });
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const sendRequest = async () => {
        const res = await axios
            .post('https://blogfam.onrender.com/api/blog/add', {
                title: inputs.title,
                description: inputs.description,
                image: inputs.imageURL,
                user: localStorage.getItem('userId'),
            })
            .catch((err) => console.log(err));
        const data = await res.data;
        console.log(data);
        return data;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest()
            .then((data) => console.log(data))
            .then(() => navigate('/blogs'));
    };
    return (
        <div style={{ backgroundColor: 'ghostwhite', paddingTop: '20px' }}>
            <form onSubmit={handleSubmit}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                    style={{ maxWidth: '800px', margin: 'auto' }}
                >
                    <Grid item xs={12}>
                        <Typography
                            fontWeight="bold"
                            fontFamily='"Poppins", sans-serif'
                            color="#393636"
                            fontSize="31px"
                            textAlign="center"
                            mb={5}
                        >
                            {' '}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {' '}
                        <InputLabel sx={{ ...labelStyles, fontSize: 20 }}>
                            Title
                        </InputLabel>
                        <TextField
                            className={classes.font}
                            name="title"
                            onChange={handleChange}
                            value={inputs.title}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel sx={{ ...labelStyles, fontSize: 20 }}>
                            Description
                        </InputLabel>
                        <TextField
                            name="description"
                            onChange={handleChange}
                            value={inputs.description}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel sx={{ ...labelStyles, fontSize: 20 }}>
                            Image URL
                        </InputLabel>
                        <TextField
                            name="imageURL"
                            onChange={handleChange}
                            value={inputs.imageURL}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            sx={{
                                fontFamily: '"Poppins", sans-serif',
                                borderRadius: 4,
                                boxShadow: '2px 0.5px 4px rgba(0, 0, 0, 0.1)',
                                height: 40,
                                textTransform: 'none',
                                fontWeight: 'bold',
                                backgroundColor: '#393636',
                                color: 'ghostwhite',
                                '&:hover': {
                                    backgroundColor: 'ghostwhite#4a4747',
                                    color: '#4a4747',
                                    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                            type="submit"
                            fullWidth
                        >
                            UPLOAD POST
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default AddBlog;
