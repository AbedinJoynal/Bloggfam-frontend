import React from 'react';
import './Footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return (
        <div className="footer-wrapper">
            <h4 className="review-title">Review Of Our Users</h4>
            <div className="review-details-container">
                <div className="review-details-left">
                    <p className="review-details">
                        <span> "{'  '}</span>
                        Extremely educational and very user-friendly. Having
                        read the blogs, I have learned a lot. I was able to
                        learn a great deal from it.The site is very helpful.{' '}
                        <span>"</span>{' '}
                        <span className="user-review">- Joynal </span>
                    </p>
                    {/* <img src="" alt="" /> */}
                </div>
                <div className="review-details-right">
                    <p className="review-details">
                        <span>"</span>
                        {'  '}
                        It's encouraging to see so many individuals posting on
                        one platform. Understanding it and finding out facts is
                        quite beneficial for those who are young.<span>
                            "
                        </span>{' '}
                        <span className="user-review">- Rahim </span>
                    </p>
                    {/* <img src="" alt="" /> */}
                </div> 
            </div>
            <div className="review-footer">
                <p className="users-no-left">50+ Daily User</p>
                <p className="users-no-right">100+ User Blogs</p>
            </div>
            <div className="review-end">
                {/* <p className='review-end-left'>Blogfam</p> */}
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
                        
                        <li><FacebookOutlinedIcon
                        fontSize='large'
                        /></li>
                        <li><TwitterIcon
                        fontSize='large'
                        /></li>
                        <li><InstagramIcon
                        fontSize='large'
                        /></li>
                    </ul>
                </div>
            </div>
                <div className='end-fill'>
                Blogfam &copy; All Rights Reserved 2022.
                </div>
        </div>
    );
};

export default Footer;
