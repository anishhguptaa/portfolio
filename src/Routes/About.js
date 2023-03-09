import React from 'react'
import HeroImg2 from '../Components/HeroImg2'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT ME." text="I'm a friendly neighbourhood developer/engineer" />
      <Footer/>
    </div>
  )
}

export default About