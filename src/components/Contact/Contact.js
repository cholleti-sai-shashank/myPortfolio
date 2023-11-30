import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import bgImg3 from'../../assets/background3.jpg'
import './ContactStyles.css'
const Contact = () => {
	/*Copied code form email js*/
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_pc375go', 'template_xwv9so3', form.current, '4gjGr9q6cictIkVLG')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
	  };

  return (
	<div className='contact'>
		<img src={bgImg3}/>
		{/*Copied the below code from email js*/}
		<form ref={form} onSubmit={sendEmail} className='contact-form'>
			
			<label>Name</label>
			<input type="text" name="user_name" />
			<label>Email</label>
			<input type="email" name="user_email" />
			<label>Message</label>
			<textarea name="message" />
			<input type="submit" value="Send" className='form-submit'/>
    	</form>
	</div>
  )
}

export default Contact