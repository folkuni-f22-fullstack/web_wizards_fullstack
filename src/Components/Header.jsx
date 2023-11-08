import { IoCartOutline } from 'react-icons/io5'
import { GiHamburger }from 'react-icons/gi'
import './header.css'
import { useState } from 'react'
import logo from '/src/Assets/Logo.svg'

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
		<header className={colorChange ? "scroll-opacity" : ''}>
		<IoCartOutline className='cart-button' />
		<img className="logo" src={logo} alt='logo'/>
		<GiHamburger className='hamburger-button' />
		</header>
	)
	
}

export default Header