import './navmeny.css'
import '../index.css'
import {NavLink} from 'react-router-dom'

const Navmeny = () => {

	return (
		<nav className="nav-meny-container">
			
			<ul className="links-nav-meny">
				<li className='nav-li'>
					<NavLink to="/Startpage">HEM</NavLink>
				</li>
				<li className='nav-li'>
					<NavLink to="/Food-Meny">MENY</NavLink>
				</li>
				<li className='nav-li'>
					<NavLink to="/Om-oss">OM OSS</NavLink>
				</li>
				<li className='nav-li'>
					<NavLink to="/Kontakt">KONTAKT</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navmeny