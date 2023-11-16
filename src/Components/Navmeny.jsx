import './navmeny.css'
import { NavLink } from 'react-router-dom'
import miniburger from '../Assets/miniburger.svg'
import {RxCross1} from 'react-icons/rx'
import { transitionChangeState } from './transitionChangeState'
import {useRecoilState} from 'recoil'
import { motion, easeInOut } from 'framer-motion'

const Navmeny = ({ isMenuOpen, handleCloseMenu }) => {
	if(!isMenuOpen) {
		return null
	}
	console.log('Is menu open', isMenuOpen)
	

	const [transitionChange, setTransitionChange ] = useRecoilState(transitionChangeState)

	return (
		<>
		<motion.div
		className={`nav-container ${transitionChange ? "transition-nav" : ''} `}
		initial={{ x: '100%' }}
		animate={{ x: 0 }}
		transition={{duration: 1.5, ease: easeInOut }}
		exit={{ x: '100%'}}>
		{/* <nav> */}
			<section className='restaurang-info'>
				<ul className='opening-hours-contatiner'>
					<li>ÖPPETTIDER</li>
					<li>MÅN-TORS 11-22</li>
					<li>FRE-LÖR 12-02</li>
					<li>SÖN 12-20</li>
				</ul>
				<div className='contact-container'>
					<ul className='contact-info'>
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
						<NavLink to="/Startpage">
							HEM
						</NavLink>
					</li>
					<li>
						<NavLink to="/Food-Meny">
							MENY
						</NavLink>
					</li>
					<li>
						<NavLink to="/Om-oss">
							OM OSS
						</NavLink>
					</li>
					<li>
						<NavLink to="/Kontakt">
							KONTAKT
						</NavLink>
					</li>
				</ul>
			</section>
		{/* </nav> */}
		</motion.div>
		
		</>
		
	)
}

export default Navmeny

// ${isMenuOpen ? 'menu-open' : 'start'}