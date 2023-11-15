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

	const [style, setStyle] = useState("large-info")

	const changeStyle = () => {
		console.log("you just clicked")
		if (style !== "large-info") setStyle("large-info")
		else setStyle("small-info")
	}

	// setStyle((prev) => (prev === "large-info" ? "small-info" : "large-info"))

	return (
		<>
			<nav className="nav-container">
				<section className="opening-hours-contatiner">
					<ul className="restaurang-info">
						<li className={style ? "large-info" : "small-info"}>
							ÖPPETTIDER
						</li>
						<li className={style ? "large-info" : "small-info"}>
							MÅN-TORS 11-22
						</li>
						<li className={style ? "large-info" : "small-info"}>
							FRE-LÖR 12-02
						</li>
						<li className={style ? "large-info" : "small-info"}>
							SÖN 12-20
						</li>
					</ul>
					<div className="contact-container">
						<ul className="contact-info">
							<li className={style ? "small-info" : "large-info"}>
								KONTAKTUPPGIFTER
							</li>
							<li className={style ? "small-info" : "large-info"}>
								MAIL@MAIL.COM
							</li>
							<li className={style ? "small-info" : "large-info"}>
								123-45678901
							</li>
							<li className={style ? "small-info" : "large-info"}>
								ADRESSGATAN 1
							</li>
							<li className={style ? "small-info" : "large-info"}>
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
