import React from 'react'
import bgImg from '../../assets/background.png'
import './Herosection2Styles.css'

const HeroSection2 = (props) => {
  return (
	<div className='hero-section2'>
		<img src={bgImg} className='bg-img2'/>
    	{/* styling of this bg Img is done in index.css */}
		<div className='herosection2-content'>
			<h1>{props.title}</h1>
			<p>{props.subheading}</p>
		</div>
	</div>
  )
}

export default HeroSection2