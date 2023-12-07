import { HashLink } from "react-router-hash-link"
import { useState } from "react"
import './navmeny.css'
import { NavLink } from 'react-router-dom'
import miniburger from '../Assets/miniburger.svg'
import {RxCross1} from 'react-icons/rx'
import { transitionChangeState } from "../data/atom"
import {useRecoilState} from 'recoil'
import { motion, easeInOut } from 'framer-motion'

const Navmeny = ({ isMenuOpen, handleCloseMenu }) => {
	if(!isMenuOpen) {
		return null
	}
		const navMobile = "nav-mobile"
		const navDesktop = "nav-desktop"
		
		const [style, setStyle] = useState(false)
		const [style2, setStyle2] = useState(false)
		
		const changeStyle = () => {
			setStyle(true)
			setStyle2(true)
			console.log('Du klickade' + style)
			if (style) {
				setStyle(false)
				setStyle2(true)
			}
		}
	console.log('Is menu open', isMenuOpen)
	

	const [transitionChange, setTransitionChange ] = useRecoilState(transitionChangeState)

	return (
		<>
		<motion.div
		className={`nav-container ${transitionChange ? "transition-nav" : ''} `}
		initial={{ x: '100%' }}
		animate={{ x: 0 }}
		transition={{duration: 1, ease: easeInOut }}
		exit={{ x: '100%'}}>
			<section className='opening-hours-container'>
				<ul className={ style ? '' : "restaurang-info"}>
					<li>ÖPPETTIDER</li>
					<li>MÅN-TORS 11-22</li>
					<li>FRE-LÖR 12-02</li>
					<li>SÖN 12-20</li>
				</ul>
				<div className='contact-container'>
					<ul className={ style ? 'large-info' : "contact-info"}>
						<li>KONTAKTUPPGIFTER</li>
						<li>MAIL@MAIL.COM</li>
						<li>123-45678901</li>
						<li>ADRESSGATAN 1</li>
						<li>STAD</li>
					</ul>
				</div>
			</section>
			
			<section className="nav-meny-container">
				<div className='icon-container'> 
					<img
							className="miniburger"
							src={miniburger}
							alt="Miniburger Logo"
						/>
					<RxCross1 onClick={handleCloseMenu} className='cross-nav'/>
				</div>
				<ul className="links-nav-meny">
						<li>
							<NavLink onClick={handleCloseMenu} to="/">HEM</NavLink>
						</li>
						<li>
							<NavLink onClick={handleCloseMenu} to="/Menu">MENY</NavLink>
						</li>
						<li>
							<HashLink onClick={handleCloseMenu} smooth to="/#about_us">
								OM OSS
							</HashLink>
						</li>
						<li>
							<HashLink
								onClick={handleCloseMenu}
								className={navMobile}
								smooth
								to="/#footer"
							>
								KONTAKT
							</HashLink>
							<NavLink
								onClick={() => changeStyle()}
								className={navDesktop}
								to="/"
							>
								KONTAKT
							</NavLink>
						</li>
					</ul>
			</section>
		</motion.div>
		
						
		</>
	)
}

export default Navmeny
