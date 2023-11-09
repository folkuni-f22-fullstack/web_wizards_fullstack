import './navmeny.css'
import { NavLink } from 'react-router-dom'
import miniburger from '../Assets/miniburger.svg'
import {RxCross1} from 'react-icons/rx'

const Navmeny = () => {

	return (
		<>
		<div className="nav-container">
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
			
			<nav className="nav-meny-container">
				<div className='icon-container'> 
					<img
							className="miniburger"
							src={miniburger}
							alt="Miniburger Logo"
						/>
						<RxCross1 className='cross-nav'/>
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
			</nav>
		</div>
		</>
		
	)
}

export default Navmeny