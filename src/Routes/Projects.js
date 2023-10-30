import React from 'react'
import HeroImg2 from '../Components/HeroImg2'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProjectTimeline from '../Components/ProjectTimeline'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="Some of my recent work."/>
      <ProjectTimeline/>
      <Footer/>
    </div>
  )
}

export default Projects