import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import HeroSection2 from '../../components/HeroSection2/HeroSection2'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'

const AboutPage = () => {
  return (
	<div>
    <TopBar/>
    <HeroSection2 title="ABOUT." subheading="Get to Know Me Better"/>
    <About/>
    <Footer/>
  </div>
  )
}

export default AboutPage