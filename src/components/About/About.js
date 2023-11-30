import React from 'react'
import bgImg4 from'../../assets/background3.jpg'
import aboutbg from '../../assets/aboutbg.png'
import './AboutStyles.css'
const About = () => {
  return (
	<div className='about'>
		<img src={bgImg4} className='bgimg4'/>
		<div className='about-content'>
			<div className='about-text'>
				<h1>Who am I?</h1>
				<p>Hello, I'm Cholleti Sai Shashank, a final-year student at IIT Bhubaneswar, currently pursuing a B.Tech degree in Mechanical Engineering. I'm from Hyderabad, Telangana. I've gained skills in C++ for software development and React for web development. I enjoy creating logo animations using Adobe After Effects. Outside of academics, I like listening to music and watching anime. I approach my work with optimism and a strong work ethic. Explore my portfolio to see the blend of my technical skills and creative projects.</p>
			</div>
			<img src={aboutbg} className='about-bg'/>
		</div>
	</div>
  )
}

export default About