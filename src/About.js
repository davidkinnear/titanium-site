import React from 'react';
import './About.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function About() {
    return (
        <div className="about">
            <div className="about_1">
                <h1>ABOUT US</h1>
                <h2 className="about_1_para">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ullamcorper lobortis</h2>
                <div className="about_1_info">
                <LocationOnIcon/>
                <h2> 221b Baker Street - London - UK</h2>
                </div>
                <div className="about_1_info">
                <PhoneIcon/>
                <h2>(+84). 123 - 456 - 789</h2>
                </div>
                <div className="about_1_info">
                <MailOutlineIcon/>
                <h2>titaniumsupport@titanium.lnk</h2>
                </div>
            </div>
            <div className="about_2">
                <h1>SUPPORT</h1>
                <h2>F.A.Q</h2>
                <h2>Terms and Conditions</h2>
                <h2>Contact Us</h2>
                <h2>Get Started</h2>
            </div>
            <div className="about_2">
                <h1>ACCOUNT</h1>
                <h2>Login</h2>
                <h2>Register</h2>
                <h2>Wishlist</h2>
                <h2>My cart</h2>
                <h2>Check out</h2>
            </div>
            <div className="about_2">
                <h1>INFORMATION</h1>
                <h2>About us</h2>
                <h2>Career</h2>
                <h2>F.A.Qs</h2>
                <h2>Best Sellers</h2>
                <h2>Term & Policy</h2>
            </div>
        </div>
    )
}

export default About
