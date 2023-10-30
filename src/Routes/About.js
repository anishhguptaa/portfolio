import React from 'react'
import HeroImg2 from '../Components/HeroImg2'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AboutTimeline from '../Components/AboutTimeline'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT ME." text="I'm a friendly neighbourhood developer/engineer." text2= "Here's a glimpse of my professional and educational journey." />
      <AboutTimeline/>
      <Footer/>
    </div>
  )
}

export default About