import "./HeroImgStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import IntroImg from "../Assets/manOnLaptop.webp"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="Intro" />
        </div>
        <div className="content">
            <p>Hi, my name is</p>
            <h1>Anish Gupta</h1>
            <p className="second-p">a full time AI Engineer</p>

            <div>
                <Link to={"/about"} className="btn ">About ME</Link>
                <Link to={"https://drive.google.com/file/d/1BCtJ4YeXb9jhSpuVQqGWieAZEWl5zzXA/view?"} target="_blank" className="btn">My Resume</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg