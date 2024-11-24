import React,{useState} from 'react'
import emailjs from '@emailjs/browser'
import '../style/contact.scss'


const Contact = (props) => {
	const {contact} = props


const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [message,setMessage] = useState('')

	

const sendEmail = (e) => {
	e.preventDefault()

	const serviceId = "service_iza571k"
	const templateId = "template_16v3rvw"
	const publicKey = "Gj8MNA8zsFQ-bZUjr"

	emailjs.init(publicKey)

	const templateParams = {
	from_name:name,
	from_email: email,
	message:message	
	}

	emailjs.send(serviceId,templateId,templateParams)
		.then((response) => {
			console.log('SUCCESS!',response.status,response.text)
			alert('Message sent successfully')

			setName('');
			setEmail('');
			setMessage('');
		})
		.catch((error) => {
		console.log('FAILED...',error);
		alert('Failed to send message. Please try again.')
	})

}



const validate = () => {
	const errors = {
		name:'',
		email:'',
		message:''
	}

	if(	(name && name.length < 2)||(name && name.length > 12)
		){
		errors.name = 'Name must be between 2 and 12'
	}else if(message && message.length < 5 ){
		errors.message = 'Text must not be less than 5'
	}
	
	return errors
}

	const errors = validate()
		

	return(
		<div id={contact} className="contactContainer">

		<div className="flexContact">
			<span className="flexContact_span none"><hr/></span>
			<p className="flexContact_para">CONTACT</p>
			<span className="flexContact_span"><hr/></span>
			 </div>


		<div className="inputContainer">


		<p className="inputText">Hey there! I'm always excited to explore new opportunities
		 where my skills can make a real difference. Got a cool project 
		 that could use some fresh talent? I'm all ears and ready to bring 
		 my A-game! Feel free to drop me a line and let's chat about how we 
		 might work magic together. </p>

		 <form onSubmit={sendEmail} noValidate>
		 	
		 	<div>
		 	<label htmlFor="name">Name</label><br/>
		 		<input 
		 		type='text'
		 		id="name"
		 		value={name}
		 		placeholder="Enter your name"
		 		onChange={(e) => setName(e.target.value)}
		 		required
		 		/><br/>
		 		{errors.name && <small>{errors.name} </small>}
		 	</div>

		 	
		 	<div>
		 	<label htmlFor="email">Email</label><br/>
		 		<input 
		 		type='text'
		 		id="email"
		 		value={email}
		 		placeholder="Enter your email address"
		 		onChange={(e) => setEmail(e.target.value)}
		 		required
		 		/>
		 	</div>

		 	
		 	<div>
		 	<label htmlFor="message">Message</label><br/>
		 		<textarea 
		 		id="message"
		 		value={message}
		 		placeholder="Got anything we need to work on? Let me Know."
		 		onChange={(e) => setMessage(e.target.value)}
		 		required
		 		/>
		 		<br/>
		 		{errors.message && <small>{errors.message} </small>}
		 	</div>

		 	<button type="submit" className="button">Send Message</button>
		 </form>








		 </div>


		</div>

		)

}

export default Contact
