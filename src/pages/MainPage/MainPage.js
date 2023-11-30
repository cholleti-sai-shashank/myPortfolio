import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import AboutPage from '../AboutPage/AboutPage'
import ContactPage from '../ContactsPage/ContactsPage'
const MainPage = () => {
  return (
	<div>
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<HomePage/>}/>
			<Route path='/projects' element={<ProjectsPage/>}/>
			<Route path='/about' element={<AboutPage/>}/>
			<Route path='/contacts' element={<ContactPage/>}/>
		</Routes>
	</BrowserRouter>
	</div>
  )
}

export default MainPage