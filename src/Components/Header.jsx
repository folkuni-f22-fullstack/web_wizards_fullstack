import { IoCartOutline } from 'react-icons/io5'
import { GiHamburger }from 'react-icons/gi'
import './header.css'
import { useState } from 'react'
import logo from '/src/Assets/Logo.svg'
import Navmeny from './Navmeny'
import { NavLink } from 'react-router-dom'
import { isLoggedInAtom } from '../data/atom'
import { useRecoilState, useRecoilValue } from 'recoil'

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
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
		{!isLoggedIn ? <NavLink to='/shoppingcart'><IoCartOutline className='cart-button' aria-label='Gå till kundvagnen' /></NavLink> : <div className='logged-in-container'> Inloggad</div>}

		
		{!isLoggedIn ?<NavLink to='/'><img className="logo" src={logo} alt='logo'/></NavLink>: <img className="logo" src={logo} alt='logo'/>}
		{!isLoggedIn ?<GiHamburger className='hamburger-button' aria-label='Öppna navigeringsmeny'/>: <GiHamburger className='hamburger'/>}
		</header>
		<Navmeny />
		</>
	)
	
}

export default Header