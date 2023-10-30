import "./HeroImgStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import IntroImg from "../Assets/manOnLaptop.jpg"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="Intro" />
        </div>
        <div className="content">
            <p>Hi, I'm a full-time</p>
            <h1>Data Scientist</h1>
            <div>
                <Link to={"/projects"} className="btn">Projects</Link>
                <Link to={"/contact"} className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg