import React from 'react'
import './LoadingPageStyles.css'
import loadingvideo from '../../assets/portfolio.mp4'
const LoadingPage = () => {
	const w = "100%";
	const h = "100vh";
  return (
	<div className='loading-page'>
		<video autoPlay muted playsInline>
			<source src={loadingvideo} />
		</video>
	</div>
  )
}

export default LoadingPage