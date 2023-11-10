import { NavLink } from "react-router-dom"
import { GrInstagram } from "react-icons/gr"
import { BsFacebook } from "react-icons/bs"
import { FaPinterest } from "react-icons/fa"
import miniburger from "../Assets/miniburger.svg"
import "./footer.css"

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-links">
				<ul>
					<li>
						<NavLink to="/MENY">MENY</NavLink>{" "}
					</li>
					<li>
						<NavLink to="/OM-OSS">OM OSS</NavLink>
					</li>
					<li>
						<NavLink to="/PERSONAL">PERSONAL</NavLink>
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
					<div className="socialmedialogos">
						<GrInstagram />
					</div>
					<div className="socialmedialogos">
						<BsFacebook />
					</div>
					<div className="socialmedialogos">
						<FaPinterest />
					</div>
				</div>
				<div className="logoburger">
					<img
						className="miniburger"
						src={miniburger}
						alt="Miniburger Logo"
					/>
				</div>
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
	)
}

export default Footer
