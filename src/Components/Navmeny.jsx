import "./navmeny.css"
import { NavLink } from "react-router-dom"
import miniburger from "../Assets/miniburger.svg"
import { RxCross1 } from "react-icons/rx"
import { HashLink } from "react-router-hash-link"
import { useState } from "react"

// when clicking on the KONTAKT Navlink it should scroll down to the footer on small screens and on desktop it should stay in the navmenu and make the  opening hours smaller and the contact info larger.

const Navmeny = () => {
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



	return (
		<>
			<nav className="nav-container">
				<section className="opening-hours-contatiner">
					<ul className={ style ? 'small-info' : "restaurang-info"}>
						<li> 
							ÖPPETTIDER
						</li>
						<li> 
							MÅN-TORS 11-22
						</li>
						<li> 
							FRE-LÖR 12-02
						</li>
						<li> 
							SÖN 12-20
						</li>
					</ul>
					<div className="contact-container">
						<ul className={ style ? 'large-info' : "contact-info"}>
							<li>
								KONTAKTUPPGIFTER
							</li>
							<li>
								MAIL@MAIL.COM
							</li>
							<li>
								123-45678901
							</li>
							<li>
								ADRESSGATAN 1
							</li>
							<li>
								STAD
							</li>
						</ul>
					</div>
				</section>

				<div className="nav-meny-container">
					<div className="icon-container">
						<img
							className="miniburger"
							src={miniburger}
							alt="Miniburger Logo"
						/>
						<RxCross1 className="cross-nav" />
					</div>
					<ul className="links-nav-meny">
						<li>
							<NavLink to="/">HEM</NavLink>
						</li>
						<li>
							<NavLink to="/Menu">MENY</NavLink>
						</li>
						<li>
							<HashLink smooth to="/#about_us">
								OM OSS
							</HashLink>
						</li>
						<li>
							<HashLink
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
				</div>
			</nav>
		</>
	)
}

export default Navmeny
