import './navmeny.css'
import { NavLink } from 'react-router-dom'

const Navmeny = () => {

	return (
		<>
		<section className='restaurang-info'>
			<div className='opening hours-contatiner'>
				<h1>ÖPPETTIDER</h1>
				<h1>MÅN-TORS 11-22</h1>
				<h1>FRE-LÖR 12-02</h1>
				<h1>SÖN 12-20</h1>
			</div>
			<div className='contact-container'>
				<h3>KONTAKTUPPGIFTER</h3>
				<h4>MAIL@MAIL.COM</h4>
				<h4>123-45678901</h4>
				<h4>ADRESSGATAN 1</h4>
				<h4>STAD</h4>
			</div>

		</section>
		<div className='icon-contatiner'>
			
		</div>
		<nav className="nav-meny-container">
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
		</>
		
	)
}

export default Navmeny