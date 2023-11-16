import { IoCartOutline } from "react-icons/io5"
import { GiHamburger } from "react-icons/gi"
import "./header.css"
import { useState } from "react"
import logo from "/src/Assets/Logo.svg"
import Navmeny from "./Navmeny"
import { NavLink } from "react-router-dom"

const Header = () => {
	const [colorChange, setColorChange ] = useState(false)
	const [logoSize, setLogoSize] = useState(false)

	function changeOpacityScroll() {
		if (window.scrollY >= 100) {
			setColorChange(true)
			setLogoSize(true)
			
		} else {
			setColorChange(false)
			setLogoSize(false)
		}
	}

	window.addEventListener("scroll", changeOpacityScroll)

	return (
		<>
		<header className={colorChange ? "scroll-opacity" : ''}>
		<NavLink to='/shoppingcart'><IoCartOutline className='cart-button' aria-label='Gå till kundvagnen' /></NavLink>
		<NavLink to='/'><img className={logoSize ? "scroll-size" : 'logo'} src={logo} alt='logo'/></NavLink>
		<GiHamburger className='hamburger-button' aria-label='Öppna navigeringsmeny'/>
		</header>
		<Navmeny />
		</>
	)
}

export default Header
