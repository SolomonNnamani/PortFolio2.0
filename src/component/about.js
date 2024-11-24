import React from 'react'
import profilepic from '../images/parlour.jpg'
import '../style/about.scss'

	const About = (props) => {
const {about,skill} = props
		return(
			<div id={about} className="aboutContainer">
			<div className="aboutMeFlex">
			<span className="aboutMeFlex_span none"><hr/></span>
			<p className="aboutMeFlex_para">ABOUT ME</p>
			<span className="aboutMeFlex_span"><hr/></span>
			 </div>

			 <div className="contentText">
			<p className="contentText_forImage"> <img src={profilepic} alt="myPicture"  /> </p>
			 <p className="contentText_text">Hey there! I'm Solomon Nnamani, a tech innovator who sees code as my creative playground and computers as my digital co-conspirators. What started as childhood curiosity has blossomed into a passionate career in software engineering, where I transform complex challenges into elegant digital solutions.
Specializing in web and mobile development, I leverage cutting-edge JavaScript to craft accessible, user-centric digital experiences. My unique journey from Political Science to software engineering at the University of Nigeria, Nsukka (Class of 2024) embodies my belief that passion and dedication can bridge any disciplinary divide.
<br/>My mission? Making the web more inclusive, one line of code at a time. I'm not just building applications; I'm creating digital bridges that connect people and ideas. With a blend of technical expertise and creative problem-solving, I'm ready to bring innovative solutions to forward-thinking teams.
Looking for a tech professional who combines analytical thinking with coding creativity? Let's connect and turn technological dreams into reality! </p>
			 </div>
			 <div className="buttonsContainer">
			<button onClick={()=>{alert('Not Avaliable Yet')} } > Get Resume </button>
			<a href={skill}> MySkills</a>
		</div>

			
			</div>

			)
	}

	export default About