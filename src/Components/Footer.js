import "./FooterStyles.css"
import React from 'react'
import {MdLocationPin, MdEmail} from "react-icons/md"
import {IoLogoWhatsapp } from "react-icons/io"
import {FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="mail">
                    <MdEmail size={20} style={{color:"white", marginRight:"1rem"}} />
                    <a href="mailto:anishgupta23@hotmail.com">Connect over mail!</a>
                </div>
                <div className="phone">
                    <IoLogoWhatsapp size={20} style={{color:"white", marginRight:"1rem"}} />
                    <a href="https://api.whatsapp.com/send?phone=917095000009">WhatsApp!</a>
                </div>
                <div className="location">
                    <MdLocationPin size={20} style={{color:"white", marginRight:"1rem"}} />
                    <p>India</p>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="socials">
                    <FaInstagram size={20} style={{color:"white", marginRight:"1rem"}} />
                    <FaTwitter size={20} style={{color:"white", marginRight:"1rem"}} />
                    <FaLinkedin size={20} style={{color:"white", marginRight:"1rem"}} />
                    <FaGithub size={20} style={{color:"white", marginRight:"1rem"}} />
                </div>
            </div>
        </div>
        {/* <p>Made with ❤️ in India</p> */}
    </div>
  )
}

export default Footer