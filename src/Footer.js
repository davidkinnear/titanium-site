import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {
    return (
        <div className="footer">
            <a href="#"><div className="socials">
            <FacebookIcon className="social" fontSize="large" color="action"/>
            <TwitterIcon className="social" fontSize="large" color="action"/>
            <YouTubeIcon className="social" fontSize="large" color="action"/>
            <InstagramIcon className="social" fontSize="large" color="action"/>
            <EmailIcon className="social" fontSize="large" color="action"/>
            </div>
            </a>
            <h1> Copyright 2020 - No Rights Reserved. Not my design.
Made by David Kinnear </h1>
        </div>
    )
}

export default Footer
