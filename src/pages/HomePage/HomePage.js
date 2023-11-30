import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Footer from '../../components/Footer/Footer'
import Projects from '../../components/Projects/Projects'
const HomePage = () => {
  return (
	<div>
    <TopBar/>
    <HeroSection/>
    <Projects/>
    <Footer/>
  </div>
  )
}

export default HomePage