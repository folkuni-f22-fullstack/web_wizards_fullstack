import { IoCartOutline } from 'react-icons/io5'
import { GiHamburger }from 'react-icons/gi'
import './header.css'

const Header = () => {
	return (
		<header>
		<IoCartOutline className='cart-button' />
		<img className="logo" src="./src/Assets/Logo.svg" />
		<GiHamburger className='hamburger-button' />
		</header>
	)
	
}

export default Header