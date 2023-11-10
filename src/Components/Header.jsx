import { IoCartOutline } from 'react-icons/io5'
import { GiHamburger }from 'react-icons/gi'
import './header.css'
import { useState } from 'react'
import logo from '/src/Assets/Logo.svg'
import Navmeny from './Navmeny'
import { NavLink } from 'react-router-dom'

const Header = () => {
	const [colorChange, setColorChange ] = useState(false)

	function changeOpacityScroll() {
		if (window.scrollY >= 100) {
			setColorChange(true)
			
		} else {
			setColorChange(false)
		}
	}

	window.addEventListener('scroll', changeOpacityScroll)

	return (
		<>
		<header className={colorChange ? "scroll-opacity" : ''}>
		<NavLink to='/shoppingcart'><IoCartOutline className='cart-button' /></NavLink>
		<NavLink to='/'><img className="logo" src={logo} alt='logo'/></NavLink>
		<GiHamburger className='hamburger-button' />
		</header>
		<Navmeny />
		</>
	)
	
}

export default Header