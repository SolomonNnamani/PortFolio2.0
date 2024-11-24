import React from 'react'
import '../style/project.scss'
import portfolio from '../images/porfolio2.png'

const Project = (props) => {
const {project} = props
	return(
		<div id={project} className="projectContainer" >
		<div className="portfolioContainer">
		<span className="portfolioContainer_span none"> <hr/> </span>
		<p className="portfolioContainer_para"> PORTFOLIO </p>
		<span className="portfolioContainer_span"> <hr/> </span>
		 </div>
	    
	    <div className="projectFolder">
			<div className="projectFolder_design">
			<span><img src={portfolio} alt="portfolio"/> </span> <br/>
			<h2>Portfolio Site </h2>
		    <p className="text">A nice portfolio equipped with fantastic functionality and great UI.</p><br/>
		    <span className="text"	style={{fontSize:"10px",color:"grey"}} >HTML </span>
		    <span className="text"	style={{fontSize:"10px",color:"grey"}} > SASS</span>
		    <span className="text"	style={{fontSize:"10px",color:"grey"}} > REACT </span>
		    <span className="text"	style={{fontSize:"10px",color:"grey"}} > EMAILJS </span>
			 </div>
			<i style={{marginTop:"20px"}}>More loading...</i>

			</div>
			
		 </div>
		
		)

}

export default Project