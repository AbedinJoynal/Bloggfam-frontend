import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './utils';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
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
            .post(
                'https://blogfam.onrender.com/api/blog/add'
            ,{
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
                <Box
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
                        className={classes.font}
                        fontWeight="bold"
                        padding={3}
                        color="#393636"
                        variant="h4"
                        textAlign={'center'}
                    >
                        Post Your Blog
                    </Typography>
                    <InputLabel className={classes.font} sx={labelStyles}>
                        Title
                    </InputLabel>
                    <TextField
                        className={classes.font}
                        name="title"
                        onChange={handleChange}
                        value={inputs.title}
                        margin="normal"
                        variant="outlined"
                    />
                    <InputLabel className={classes.font} sx={labelStyles}>
                        Description
                    </InputLabel>
                    <TextField
                        className={classes.font}
                        name="description"
                        onChange={handleChange}
                        value={inputs.description}
                        margin="normal"
                        variant="outlined"
                    />
                    <InputLabel className={classes.font} sx={labelStyles}>
                        ImageURL
                    </InputLabel>
                    <TextField
                        className={classes.font}
                        name="imageURL"
                        onChange={handleChange}
                        value={inputs.imageURL}
                        margin="normal"
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
                        UPLOAD POST
                    </Button>
                </Box>
            </form>
            <div className="review-ends-blog">
                <p className="review-end-left">
                    Blogfam.All Rights Reserved 2022
                </p>
               
                <div className="review-end-right">
                    <ul>
                        <li>
                            <FacebookOutlinedIcon
                            
                            />
                        </li>
                        <li>
                            <TwitterIcon
                            
                            />
                        </li>
                        <li>
                            <InstagramIcon />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;
