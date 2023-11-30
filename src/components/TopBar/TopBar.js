import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/portfolio_logo.png'
import './TopBarStyles.css'
const TopBar = () => {
	const scrollToTop = () => {
		window.scrollTo({
		  top: 0,
		  //behavior: 'smooth'
		  //for smooth movement to top
		});
	  };
  return (
	<nav>
		<div className='logo'>
			<img src={logoImg}/>
			<p>Portfolio</p>
		</div>
		<div className='links'>
			<Link to='/' className='link' onClick={scrollToTop}>Home</Link>
			<Link to='/projects' className='link' onClick={scrollToTop}>Projects</Link>
			<Link to='/about' className='link' onClick={scrollToTop}>About</Link>
			<Link to='/contacts' className='link' onClick={scrollToTop}>Contact</Link>
		</div>
		
	</nav>
  )
}

export default TopBar