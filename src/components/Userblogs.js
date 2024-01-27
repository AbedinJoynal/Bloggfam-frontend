import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Userblogs.css';

const Userblogs = () => {
    const [user, setUser] = useState();
    const id = localStorage.getItem('userId');

    useEffect(() => {
        const sendRequest = async () => {
            try {
                const res = await axios.get(
                    `https://blogfam.onrender.com/api/blog/user/${id}`
                );
                const data = res.data;
                setUser(data.user);
            } catch (err) {
                console.log(err);
            }
        };

        sendRequest();
    }, [id]); 

    return (
        <div style={{ backgroundColor: 'ghostwhite', marginTop: '-20px' }}>
            {user &&
                user.blogs &&
                user.blogs.map((blog, index) => (
                    <Blog
                        id={blog._id}
                        key={index}
                        isUser={true}
                        title={blog.title}
                        description={blog.description}
                        imageURL={blog.image}
                        userName={user.name}
                    />
                ))}
            <div className="review-ends">
                <p className="review-end-left">
                    Blogfam. All Rights Reserved 2022
                </p>
                <div className="review-end-right">
                    <ul>
                        <li>
                            <FacebookOutlinedIcon fontSize="large" />
                        </li>
                        <li>
                            <TwitterIcon fontSize="large" />
                        </li>
                        <li>
                            <InstagramIcon fontSize="large" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Userblogs;
