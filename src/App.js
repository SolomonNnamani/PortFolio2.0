import React, {useRef,useEffect,useState} from 'react'
import './style/App.scss'
import Header from './component/header'
import About from './component/about'
import Skill from './component/skill'
import Project from './component/project'
import Contact from './component/contact'
import Footer from './component/footer'
import { TbHexagonLetterSFilled } from "react-icons/tb";
import { CiSliderHorizontal, CiSliderVertical } from "react-icons/ci";


	const Navbar = () => {
		const headRef = useRef(null)
		const [isVisible, setVisible] = useState(false)
		const sidebarRef = useRef(null)
		const buttonRef= useRef(null)

		const scrollToSection = (elementId)=> {
			const element = document.getElementById(elementId)
			if(element){
				element.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			}
		}


		
	useEffect(() => {

				const handleScroll= () => {
					const scrollPosition = window.scrollY;
					if(scrollPosition > 200){
						headRef.current.classList.add('scrolled')
					}else{
						headRef.current.classList.remove('scrolled')
					}
					
				}
				window.addEventListener('scroll', handleScroll);

				const handleClickOutside= (e) => {
					if(sidebarRef.current &&
					 !sidebarRef.current.contains(e.target)&&
					 !buttonRef.current.contains(e.target))	{
      			setVisible(false)
    }
				}
				document.addEventListener('mousedown', handleClickOutside)

				//cleanup Function
				return() => {
					window.removeEventListener('scroll',handleScroll)
					document.removeEventListener('mousedown', handleClickOutside)
				}
			},[])


		const displayButton = () => {
		setVisible(prevVisible => !prevVisible)
		
	}
			
		const handleNavClick = () => {
			setVisible(false)
		}



		return(

			<div ref={headRef} className="header">
			<div className="headBlock">
			<TbHexagonLetterSFilled className="headBlock_icon" />
			<button ref={buttonRef}
			 onClick={displayButton} 
			 className="isVisibleBtn"> 
			{isVisible ?  <CiSliderVertical /> :  <CiSliderHorizontal /> }
			 </button>
			


			<nav ref={sidebarRef} className={`NavDesign ${isVisible ? "open" : "close"}`}>
			<ul className= "NavDesign_ul">
			<li>
			<a href="#home"
			onClick={(e) => {
				e.preventDefault();
				handleNavClick();
				scrollToSection('home')
			}} > HOME</a>
			</li>

			<li>
			<a href="#about"
			onClick={(e) => {
				e.preventDefault();
				handleNavClick();
				scrollToSection('about')
			}} > ABOUT</a>
			</li>

			<li>
			<a href="#skill"
			onClick={(e) => {
				e.preventDefault();
				handleNavClick();
				scrollToSection('skill')
			}} > SKILLS</a>
			</li>
			
			<li>
			<a href="#project"
			onClick={(e) => {
				e.preventDefault();
				handleNavClick();
				scrollToSection('project')
			}} > PROJECT</a>
			</li>

			<li >
			<a href="#contact"
			onClick={(e) => {
				e.preventDefault();
				handleNavClick();
				scrollToSection('contact')
			}} style={{border:"2px solid orange"}} > CONTACT</a>
			</li>
			
			
			</ul>
			</nav>
			 </div>
			 </div>
			
			)
	}

const App = () => {
	
	return(
		<div  className="App">
 			<Navbar/>
		<Header home="home"
		about = "#about" />
		 <About
		  about="about"
		  skill = "#skill"/>
		 <Skill skill="skill"/>
		 <Project project="project" />
		 <Contact contact="contact"/>
		 <Footer/>
		 
		 </div>
		)
}

export default App