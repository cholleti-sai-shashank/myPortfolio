import React from 'react'
import bgImg from '../../assets/background.png'
import { Link } from 'react-router-dom'
import './HeroSectionStyles.css'
import Resume from '../../assets/resume.pdf'
const HeroSection = () => {
	//instead of using a href targer blank, this is preferred
	const openPdf = () =>{
		window.open(Resume,'_blank');
	}

  return (
	<div className='hero-section'>
		<img src={bgImg} className='bg-img'/>
    	{/* styling of this bg Img is done in index.css */}
		<div className='herosection-content'>
			<p className='subheading'>HI, I'M CHOLLETI SAI SHASHANK.</p>
			<h1>Software Developer.</h1>
			<div className='hero-btns'>
				<div className='btn'>
					<p className='btn-content' onClick={openPdf}>RESUME</p>
				</div>
				<div className='btn'>
				<Link to='/contacts' className='btn-content'>CONTACT</Link>
				</div>
				
			</div>
		</div>
	</div>
  )
}

export default HeroSection