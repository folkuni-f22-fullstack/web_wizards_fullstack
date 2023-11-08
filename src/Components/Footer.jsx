import { NavLink } from "react-router-dom"
import { GrInstagram } from "react-icons/gr"
import { BsFacebook } from "react-icons/bs"
import { FaPinterest } from "react-icons/fa"
import "./footer.css"
const Footer = () => {
	return (
		<div>
			<div className="footer">
				<div className="footer-links">
					<ul>
						<li>
							<NavLink to="/MENY">MENY</NavLink>{" "}
						</li>
						<li>
							<NavLink to="/OM-OSS">OM OSS</NavLink>
						</li>
					</ul>
				</div>
				<div className="opening-hours">
					<ul>
						<li>MÅN-TORS 11-22</li>
						<li>FRE-LÖR 12-02</li>
						<li>SÖN 12-20</li>
					</ul>
				</div>
				<div className="socialmedia">
					<ul>
						<li>
							<GrInstagram />
						</li>
						<li>
							<BsFacebook />
						</li>
						<li>
							<FaPinterest />
						</li>
					</ul>
				</div>
				<div className="contact">
					<ul>
						<li>KONTAKTUPPGIFTER</li>
						<li>MAIL@MAIL.COM</li>
						<li>123-456 78 90</li>
						<li>ADRESSGATAN 1</li>
						<li>STAD</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer
