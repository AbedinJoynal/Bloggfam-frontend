import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Typography,
    CardMedia,
    Card,
    CardHeader,
    Avatar,
    CardContent,
    Box,
    IconButton,
} from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';
import { useStyles } from './utils';

const Blog = ({ title, userName, description, imageURL, isUser, id }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const handleEdit = (e) => {
        navigate(`/myBlogs/${id}`);
    };
    const deleteRequest = async () => {
        const res = await axios
            .delete(`https://blogfam.onrender.com/api/blog/${id}`)
            .catch((err) => console.log(err));
        const data = await res.data;
        return data;
    };
    const handleDelete = () => {
        deleteRequest()
            .then(() => navigate('/'))
            .then(() => navigate('/blogs'));
    };
    console.log(title, isUser);
    return (
        <div className="blog-wrapper">
            {' '}
            <Card
                sx={{
                    width: '48%',
                    margin: 'auto',
                    mt: 3,
                    cursor: 'pointer',
                    color: '#393636',
                    padding: 2,
                    borderRadius: '0px 15px 0px 15px',
                    backgroundColor: '#ECEEF2',
                    boxShadow: '5px 5px 10px #ccc',
                    '&:hover': {
                        boxShadow: '10px 10px 20px #ccc',
                    },
                }}
            >
                {isUser && (
                    <Box display="flex">
                        <IconButton
                            onClick={handleEdit}
                            sx={{
                                marginLeft: 'auto',
                                '&:hover': {
                                    background: '#FFFFFF',
                                    color: 'black',
                                    borderRadius: '10px',
                                },
                            }}
                        >
                            <ModeEditOutlineIcon sx={{}} />
                        </IconButton>
                        <IconButton
                            sx={{
                                '&:hover': {
                                    background: '#FFFFFF',
                                    borderRadius: '10px',
                                },
                            }}
                            onClick={handleDelete}
                        >
                            <DeleteForeverIcon color="error" />
                        </IconButton>
                    </Box>
                )}
                <CardHeader
                    avatar={
                        <Avatar
                            className={classes.font}
                            sx={{
                                bgcolor: '#393636',
                                borderRadius: '30px',
                                width: '50px',
                            }}
                            aria-label="recipe"
                        >
                            {userName}
                        </Avatar>
                    }
                    title={title}
                />
                <CardMedia
                    component="img"
                    height="200"
                    image={imageURL}
                    alt="Paella dish"
                />
                <CardContent>
                    <hr />
                    <br />
                    <Typography
                        className={classes.font}
                        sx={{
                            fontSize: '20px',
                        }}
                        variant="body2"
                    >
                        <b>{userName}</b>
                        {' - '}
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Blog;
