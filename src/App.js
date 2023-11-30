import React, { useEffect, useState } from 'react'
import LoadingPage from './components/LoadingPage/LoadingPage'
import MainPage from './pages/MainPage/MainPage';
const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(()=>{
		const timeout = setTimeout(()=>{
			setIsLoading(false);
		}, 7000)
		return () => clearTimeout(timeout);
	}, [])
  return (
	<div>
		{isLoading?<LoadingPage/>:<MainPage/>}
	</div>
  )
}

export default App