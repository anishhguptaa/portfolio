import "./FooterStyles.css"
import React from 'react'
import {MdEmail} from "react-icons/md"
import {IoLogoWhatsapp } from "react-icons/io"
import {FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <h4>Let's Connect</h4>
                <div className="socials">
                    <div>
                        <a href="https://www.linkedin.com/in/anishhguptaa/" className="elements">
                            <FaLinkedin size={25} style={{color:"white", marginRight:"1.3rem"}} />
                            LinkedIn
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/anishhguptaa/" className="elements">
                            <FaGithub size={25} style={{color:"white", marginRight:"1.3rem"}} />
                            GitHub
                        </a>
                    </div>
                    <div className="test">
                        <a href="https://www.instagram.com/anishhguptaa/" className="elements">
                            <FaInstagram size={25} style={{color:"white", marginRight:"1.3rem"}} />
                            <span>Instagram</span>
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/anishhguptaa/" className="elements">
                            <FaTwitter size={25} style={{color:"white", marginRight:"1.3rem"}} />
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
            <div className="right">
                <h4>Get in touch</h4>
                <div className="mail">
                    <a href="mailto:anishgupta23@hotmail.com" className="elements">
                        <MdEmail size={20} style={{color:"white", marginRight:"1rem"}} />
                        E-mail!
                    </a>
                </div>
                <div className="phone">
                    <a href="https://api.whatsapp.com/send?phone=917095000009" className="elements">
                        <IoLogoWhatsapp size={20} style={{color:"white", marginRight:"1rem"}} />
                        WhatsApp!
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer