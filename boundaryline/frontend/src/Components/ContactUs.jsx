import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className="contact-us">
            <h3>Meet and follow us on</h3>
            <div className="social-medias">
                <div className="social-media">
                    <i className="fa-brands fa-facebook" />
                </div>
                <div className="social-media">
                    <i className="fa-brands fa-twitter" />
                </div>
                <div className="social-media">
                    <i className="fa-brands fa-instagram" />
                </div>
                <div className="social-media">
                    <i className="fa-solid fa-envelope" />
                </div>
                <div className="call">
                    <i className="fa-solid fa-phone" /> 0800 003 006
                </div>
            </div>
        </div>
    )
}

export default ContactUs