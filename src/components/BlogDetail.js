import { Button, InputLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Footer from './Footer';

const labelStyles = {
    mb: 1,
    mt: 2,
    fontSize: '24px',
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#393636',
};
const BlogDetail = () => {
    const navigate = useNavigate();
    const [blog, setBlog] = useState();
    const id = useParams().id;
    console.log(id);
    const [inputs, setInputs] = useState({});
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const fetchDetails = async () => {
        const res = await axios
            .get(`https://blogfam.onrender.com/api/blog/${id}`)
            .catch((err) => console.log(err));
        const data = await res.data;
        return data;
    };
    useEffect(() => {
        fetchDetails().then((data) => {
            setBlog(data.blog);
            setInputs({
                title: data.blog.title,
                description: data.blog.description,
            });
        });
    }, [id]);
    const sendRequest = async () => {
        const res = await axios
            .put(`https://blogfam.onrender.com/api/blog/update/${id}`, {
                title: inputs.title,
                description: inputs.description,
            })
            .catch((err) => console.log(err));

        const data = await res.data;
        return data;
    };
    console.log(blog);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest()
            .then((data) => console.log(data))
            .then(() => navigate('/myBlogs/'));
    };

    return (
        <div style={{ backgroundColor: 'ghostwhite', paddingTop: '20px' }}>
            {' '}
            {inputs && (
                <form onSubmit={handleSubmit}>
                    <Box
                        padding={3}
                        margin={'auto'}
                        marginTop={3}
                        display="flex"
                        flexDirection="column"
                        width="50%"
                    >
                        <Typography
                            fontWeight={'bold'}
                            fontFamily={'Poppins'}
                            padding={3}
                            color="#393636"
                            variant="h4"
                            textDecoration={'none'}
                            textAlign={'center'}
                        >
                            Update Your Blog
                        </Typography>
                        <InputLabel sx={labelStyles}>Title</InputLabel>
                        <TextField
                            name="title"
                            onChange={handleChange}
                            value={inputs.title}
                            margin="auto"
                            variant="outlined"
                        />
                        <InputLabel sx={labelStyles}>Description</InputLabel>
                        <TextField
                            name="description"
                            onChange={handleChange}
                            value={inputs.description}
                            margin="auto"
                            variant="outlined"
                        />

                        <Button
                            sx={{
                                borderRadius: 2,
                                padding: '0.8rem',
                                backgroundColor: '#393636',
                                color: 'ghostwhite',
                                fontFamily: 'Poppins',
                                fontWeight: 'bold',
                                '&:hover': {
                                    background: 'ghostwhite',
                                    color: '#393636',
                                    boxShadow: '2px 0.5px 4px black',
                                },
                                marginTop: '2.5rem',
                            }}
                            type="submit"
                        >
                            Update
                        </Button>
                    </Box>
                </form>
            )}
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default BlogDetail;
