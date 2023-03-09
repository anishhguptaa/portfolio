import React from 'react'
import HeroImg2 from '../Components/HeroImg2'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Work from '../Components/Work'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent work."/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Projects