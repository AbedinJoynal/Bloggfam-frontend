import React from 'react';
import './Footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-social-icons">
                <FacebookOutlinedIcon />
                <TwitterIcon />
                <InstagramIcon />
            </div>
            <div className="footer-text">
                Blogfam &copy; All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
