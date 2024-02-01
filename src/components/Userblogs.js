import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';
import Footer from './Footer';

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
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Userblogs;
