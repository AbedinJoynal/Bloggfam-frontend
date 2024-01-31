import Header from './components/Header';
import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import Userblogs from './components/Userblogs';
import BlogDetail from './components/BlogDetail';
import AddBlog from './components/AddBlog';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const userId = useSelector((state) => state.userId);
    useEffect(() => {
        if (userId) {
            dispatch(authActions.login());
        }
    }, [dispatch, userId]);

    return (
        <React.Fragment>
            <ToastContainer position="top-right" />
            <header>
                <Header />
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Auth />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route
                        path="/blogs"
                        element={isLoggedIn ? <Blogs /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/blogs/add"
                        element={isLoggedIn ? <AddBlog /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/myBlogs"
                        element={
                            isLoggedIn ? <Userblogs /> : <Navigate to="/" />
                        }
                    />
                    <Route
                        path="/myBlogs/:id"
                        element={
                            isLoggedIn ? <BlogDetail /> : <Navigate to="/" />
                        }
                    />
                </Routes>
            </main>
        </React.Fragment>
    );
}

export default App;
