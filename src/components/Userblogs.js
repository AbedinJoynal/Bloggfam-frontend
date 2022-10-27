import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';
import './Userblogs.css';
const Userblogs = () => {
    const [user, setUser] = useState();
    const id = localStorage.getItem('userId');
    const sendRequest = async () => {
        const res = await axios
            .get(`http://localhost:5000/api/blog/user/${id}`)
            .catch((err) => console.log(err));
        const data = await res.data;
        return data;
    };

    useEffect(() => {
        sendRequest().then((data) =>setUser(data.user));
    }, []);
    console.log(user);
    return (
        <div
        style={{backgroundColor:'ghostwhite'
    ,marginTop:'-20px'
    }}
        >
            {' '}
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
                <p className='review-end-left'>Blogfam.All Rights Reserved 2022</p>
                <div className='review-end-middle'>
                    <ul>
                        <li>Information</li>
                        <li>Our Site</li>
                        <li>Our Services</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='review-end-right'>
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

export default Userblogs;
