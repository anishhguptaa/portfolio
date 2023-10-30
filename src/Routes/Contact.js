import React from 'react'
import HeroImg2 from '../Components/HeroImg2'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Form from '../Components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT." text="Let's get in touch!" />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact