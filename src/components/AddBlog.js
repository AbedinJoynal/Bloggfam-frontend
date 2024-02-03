import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Grid,
    InputLabel,
    TextField,
    Typography,
    Container,
} from '@mui/material';
import Footer from './Footer';

const labelStyles = {
    mb: 1,
    mt: 2,
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#393636',
};

const AddBlog = () => {
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
        try {
            const res = await axios.post(
                'https://blogfam.onrender.com/api/blog/add',
                {
                    title: inputs.title,
                    description: inputs.description,
                    image: inputs.imageURL,
                    user: localStorage.getItem('userId'),
                }
            );
            console.log(res.data);
            return res.data;
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => navigate('/blogs'));
    };

    return (
        <Container maxWidth="md" sx={{ pt: '20px', bgcolor: 'ghostwhite' }}>
            <form onSubmit={handleSubmit}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item xs={12} sm={6}>
                        <InputLabel sx={labelStyles}>Title</InputLabel>
                        <TextField
                            name="title"
                            onChange={handleChange}
                            value={inputs.title}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel sx={labelStyles}>Description</InputLabel>
                        <TextField
                            name="description"
                            onChange={handleChange}
                            value={inputs.description}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel sx={labelStyles}>Image URL</InputLabel>
                        <TextField
                            name="imageURL"
                            onChange={handleChange}
                            value={inputs.imageURL}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            sx={{
                                fontFamily: '"Poppins", sans-serif',
                                borderRadius: 2,
                                textTransform: 'none',
                                fontWeight: 'bold',
                                backgroundColor: '#393636',
                                color: 'ghostwhite',
                                '&:hover': {
                                    backgroundColor: '#4a4747',
                                    color: 'ghostwhite',
                                },
                                mt: 2,
                                width: '100%',
                            }}
                            type="submit"
                        >
                            UPLOAD POST
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Box mt={4}>
                <Footer />
            </Box>
        </Container>
    );
};

export default AddBlog;
