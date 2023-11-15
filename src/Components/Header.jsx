import { IoCartOutline } from 'react-icons/io5'
import { GiHamburger }from 'react-icons/gi'
import './header.css'
import './navmeny.css'
import { useState } from 'react'
import logo from '/src/Assets/Logo.svg'
import Navmeny from './Navmeny'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';
import { transitionChangeState } from './transitionChangeState'
import {useRecoilState} from 'recoil'


const Header = () => {
	const [colorChange, setColorChange ] = useState(false)
	const [transitionChange, setTransitionChange ] = useRecoilState(transitionChangeState)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleMenuClick = () => {
		setIsMenuOpen(!isMenuOpen); 
		setTransitionChange(true)
	}

	const handleCloseMenu = () => {
		setIsMenuOpen(false)
	}

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
			<NavLink to='/shoppingcart'><IoCartOutline className='cart-button' aria-label='Gå till kundvagnen' /></NavLink>
			<NavLink to='/'><img className="logo" src={logo} alt='logo'/></NavLink>
			<GiHamburger className='hamburger-button' aria-label='Öppna navigeringsmeny' onClick={handleMenuClick}/>
		</header>
				<Navmeny isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu}/>  
		</>
	)
	
}


export default Header

{/* <AnimatePresence>
{isMenuOpen && (
	<motion.div 
	key="navmeny"
	initial={{x: '100%'}}
	animate={{x: 0}}
exit={{ x: '100%' }}>		 */}
//NAVMENY
{/* </motion.div>
)}
</AnimatePresence> */}