import React from 'react'
import bgImg3 from'../../assets/background3.jpg'
import Card from '../Card/Card'
import './ProjectsStyles.css'
const Projects = () => {
  return (
	<div className='projects'>
		<img src={bgImg3} className='bgimg3'/>
		<Card title="EduSync" description="The project enables users to log in, explore profiles, connect with others, post content, and stay updated on the latest education news."/>
		<Card title="ExpenseTracker" description="The project empowers users to log in, review their balance and spending patterns, and gain insights into effective financial management."/>
		<Card title="Smart Elephant Detection System" description="Conducted research and analysis on human-elephant conflict (HEC) through academic papers, emphasizing IoT-based architecture and system evaluation, and addressed challenges while enhancing existing solutions."/>
		
	</div>
  )
}

export default Projects