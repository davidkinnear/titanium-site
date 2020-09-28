import React from 'react';
import './Contact.css';
import SendIcon from '@material-ui/icons/Send';

function Contact() {
    return (
        <div className="contact">
            <img src="https://dev-titanium-demo-com.3dcartstores.com/assets/templates/titanium-core-premium/images/banner-home.jpg"/>
            <div className="contact_content">
                <h1>NEWSLETTER</h1>
                <h2>Signup to become the first receive our latest news</h2>
                <div className="header__center">
                <input type="text" placeholder="Enter your email here"/>
                <SendIcon className="glass"/>
            </div>
            </div>
        </div>
    )
}

export default Contact
