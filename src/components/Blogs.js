import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';
import './Blogs.css';
import Footer from './Footer';
const Blogs = () => {
    const [blogs, setBlogs] = useState();
    const sendRequest = async () => {
        const res = await axios
            .get('https://bloggfam.herokuapp.com/api/blog')
            .catch((err) => console.log(err));
        const data = await res.data;
        return data;
    };
    useEffect(() => {
        sendRequest().then((data) => setBlogs(data.blogs));
    }, []);
    console.log(blogs);
    return (
        <div className='blogs-wrapper'>
            <div className='blogs-section'>
                <p className='blogs-intro'>
                Write Your Way To Success
                </p>
                <p className='blogs-desc-start'>
                    OUR BLOG 
                </p>
                <p className='blogs-desc'>
                Let Us Know 
                </p>
            </div>

             <div className="blogs-container">
            {blogs &&
                blogs.map((blog, index) => (
                    <Blog
                        id={blog._id}
                        isUser={localStorage.getItem('userId') === blog.user}
                        title={blog.title}
                        description={blog.description}
                        imageURL={blog.image}
                        userName={blog.name}
                    />
                ))}
        </div>
        <Footer/>
        </div>
       
    );
};

export default Blogs;
