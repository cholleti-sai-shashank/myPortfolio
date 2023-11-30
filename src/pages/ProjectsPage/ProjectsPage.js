import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import HeroSection2 from '../../components/HeroSection2/HeroSection2'
import Footer from '../../components/Footer/Footer'
import Projects from '../../components/Projects/Projects'

const ProjectsPage = () => {
  return (
	<div>
    <TopBar/>
    <HeroSection2 title="PROJECTS." subheading="Some of my most recent works"/>
    <Projects/>
    <Footer/>
  </div>
  )
}

export default ProjectsPage