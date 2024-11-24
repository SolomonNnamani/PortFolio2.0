import React from 'react';
import { FaHtml5, FaSass,  FaReact , FaNode , FaGithub , FaCode} from "react-icons/fa";
import { IoLogoJavascript, IoGameControllerOutline } from "react-icons/io5";
import '../style/skill.scss'


const Skill = (props) => {
const {skill} = props
	return(

		<div id={skill} className="skillContainer">
		<div className="flexSkill">
			<span className="flexSkill_span none"><hr/> </span>
			<p className="flexSkill_para">MY SKILLS </p>
			<span className="flexSkill_span "><hr/></span>
		</div>

		 <div className="iconsContainer">
			 <p className="para"> 
			 <FaHtml5 className="para_icons" style={{color:"orangeRed"}} /> 
			 <span className="para_right">85% </span> 
			 <span className="para_span" style={{width:"85%"}} > </span> 
			 
			 </p>

			 <p className="para"> 
			 <FaSass className="para_icons" style={{color:"#CF649A"}}/>
			 <span className="para_right"> 75% </span>
			  <span className="para_span" style={{width:"75%"}} > </span> 
			   
			    </p>

			 <p className="para"> 
			 <IoLogoJavascript className="para_icons" style={{color:"yellow"}}/> 
			 <span className="para_right"> 75% </span>
			 <span className="para_span" style={{width:"75%"}} > </span> 
			 
			 </p>

			 <p className="para"> 
			 <FaReact className="para_icons" style={{color:"#61DAFB"}}/> 
			 <span className="para_right"> 80%</span>
			 <span className="para_span" style={{width:"80%"}} > </span>
			  
			   </p>

			 <p className="para"> 
			 <FaNode className="para_icons" style={{color:"#339933"}} /> 
			 <span className="para_right"> 70% </span>
			 <span className="para_span" style={{width:"70%"}}  > </span>
			  
			   </p>

			 <p className="para"> 
			 <FaGithub  className="para_icons"/>
			 <span className="para_right"> 55% </span>
			  <span className="para_span" style={{width:"55%"}} > </span> 
			  
			  </p>

			 </div>

			 <div className="flexLove">
			 <span className="flexLove_span none"><hr/> </span>
			 <p className="flexLove_para">LOVE TO DO </p>
			 <span className="flexLove_span"><hr/> </span>
			  </div>

			  <div className="hobbyContainer">
			 <p><FaCode className="hobbyContainer_icons"/><br/>
			 Coding </p>

			 <p><IoGameControllerOutline className="hobbyContainer_icons" /><br/>
			 Gaming </p>
			 </div>

		</div>

		)
}


export default Skill