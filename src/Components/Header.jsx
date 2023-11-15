import { IoCartOutline } from 'react-icons/io5'
import { GiHamburger }from 'react-icons/gi'
import './header.css'
import { useState } from 'react'
import logo from '/src/Assets/Logo.svg'
import Navmeny from './Navmeny'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion, easeInOut } from 'framer-motion';


const Header = () => {
	const [colorChange, setColorChange ] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleMenuClick = () => {
		setIsMenuOpen(!isMenuOpen); 
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
		{/* <AnimatePresence>
            <motion.div 
                initial={{x: '-100%'}}
                animate={{x: 10}}
                transition={{duration: 1.5, ease: easeInOut }}
                exit={{ x: '100%' }}>		 */}
				<Navmeny isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu}/>  
            {/* </motion.div>
            </AnimatePresence> */}
		</>
	)
	
}


export default Header