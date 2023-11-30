import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import HeroSection2 from '../../components/HeroSection2/HeroSection2'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const ContactsPage = () => {
  return (
	<div>
    <TopBar/>
    <HeroSection2 title="CONTACT." subheading="Let's Connect"/>
    <Contact/>
    <Footer/>
  </div>
  )
}

export default ContactsPage