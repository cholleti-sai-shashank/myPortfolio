import React from 'react'
import { Link } from 'react-router-dom'
import './FooterStyles.css'
import bgImg2 from '../../assets/background2.jpg'
import { FaHome } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import shashank from '../../assets/shashank_bg2.png'
const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
		  top: 0,
		  //behavior: 'smooth'
		  //for smooth movement to top
		});
	  };
  return (
	<div className='footer-container'>
		<img src={bgImg2} className='bgimg2'/>
		<div className='footer'>
			<div className='footer-left'>
				<div className='footer-left-line'>
					<FaHome/>
					<p>Saroor Nagar, Hyderabad, Telangana, India</p>
				</div>
				<div className='footer-left-line'>
					<FaMailBulk/>
					<p>cholletisaishashank@gmail.com</p>
				</div>
				<div className='footer-left-line'>
					<FaPhone/>
					<p>(+91)9493176600</p>
				</div>
				<div className='footer-left-line'>
					<FaLinkedinIn/>
					<p>https://www.linkedin.com/in/cholleti-sai-shashank-3b3515214/</p>
				</div>
			</div>
			<div className='footer-right'>
				<img src={shashank} className='photo'/>
				<Link to='/contacts' className='footer-right-content' onClick={scrollToTop}>Drop a quick mail!</Link>
			</div>
		</div>
	</div>
  )
}

export default Footer