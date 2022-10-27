import { Button, InputLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BlogDetail.css';

const labelStyles = {
    mb: 1,
    mt: 2,
    fontSize: '24px',
    fontWeight: 'bold',
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
            .get(`http://localhost:5000/api/blog/${id}`)
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
            .put(`http://localhost:5000/api/blog/update/${id}`, {
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
                        backgroundColor="#ECEEF2"
                        border={3}
                        borderColor="#393636"
                        borderRadius={5}
                        boxShadow="10px 10px 20px #ccc"
                        padding={3}
                        margin={'auto'}
                        marginTop={3}
                        display="flex"
                        flexDirection="column"
                        width="50%"
                    >
                        <Typography
                            fontWeight={'bold'}
                            padding={3}
                            color="#393636"
                            variant="h4"
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
                                mt: 2,
                                borderRadius: 2,
                                backgroundColor: '#393636',
                                color: 'ghostwhite',
                                '&:hover': {
                                    background: 'black',
                                    color: '#ffffff',
                                },
                            }}
                            type="submit"
                        >
                            Update
                        </Button>
                    </Box>
                </form>
            )}
            <div className="review-ends-blog">
                <p className="review-end-left">
                    Blogfam.All Rights Reserved 2022
                </p>
                <div className="review-end-middle">
                    <ul>
                        <li>Information</li>
                        <li>Our Site</li>
                        <li>Our Services</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="review-end-right">
                    <ul>
                        <li>Social Links</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
