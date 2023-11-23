import { NavLink } from "react-router-dom"
import { GrInstagram } from "react-icons/gr"
import { BsFacebook } from "react-icons/bs"
import { FaPinterest } from "react-icons/fa"
import miniburger from "../Assets/miniburger.svg"
import { HashLink } from "react-router-hash-link"

import "./footer.css"

const Footer = () => {
	return (
		<div id="footer" className="footer">
			<div className="footer-links">
				<ul>
					<li>
						<NavLink to="/Menu">MENY</NavLink>
					</li>
					<li>
						<HashLink smooth to="/#about_us">
							OM OSS
						</HashLink>
					</li>
					<li>
						<NavLink to="/login">PERSONAL</NavLink>
					</li>
				</ul>
			</div>
			<div className="opening-hours">
				<ul>
					<li>ÖPPETTIDER</li>
					<li>MÅN-TORS 11-22</li>
					<li>FRE-LÖR 12-02</li>
					<li>SÖN 12-20</li>
				</ul>
			</div>
			<div className="imagescontainer">
				<div className="socialmedia">
					<a aria-label="Instagram" href="https://www.instagram.com">
						<div className="socialmedialogos">
							<GrInstagram className="socialmedialogos-svg" />
						</div>
					</a>
					<a aria-label="Facebook" href="https://www.facebook.com">
						<div className="socialmedialogos">
							<BsFacebook className="socialmedialogos-svg" />
						</div>
					</a>

					<a aria-label="Pinterest" href="https://www.pinterest.com">
						<div className="socialmedialogos">
							<FaPinterest className="socialmedialogos-svg" />
						</div>
					</a>
				</div>
				<div className="logoburger">
					<NavLink to="/">
						<img
							className="miniburger-footer"
							src={miniburger}
							alt="Miniburger Logo"
						/>
					</NavLink>
				</div>
			</div>

			<div className="contact">
				<ul>
					<li>KONTAKTUPPGIFTER</li>
					<li>
						<a
							id="mail_link"
							className="mail_link"
							href="mailto:mail.mail.com"
						>
							MAIL@MAIL.COM
						</a>
					</li>
					<li>123-456 78 90</li>
					<li>ADRESSGATAN 1</li>
					<li>STAD</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer
