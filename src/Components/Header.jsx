import { IoCartOutline } from "react-icons/io5"
import { GiHamburger } from "react-icons/gi"
import "./header.css"
import "./navmeny.css"
import { useState } from "react"
import logo from "/src/Assets/Logo.svg"
import Navmeny from "./Navmeny"
import { NavLink } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { transitionChangeState } from "../utils/transitionChangeState"

import { isLoggedInAtom } from "../data/atom"
import { useRecoilState, useRecoilValue } from "recoil"

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
	const [colorChange, setColorChange] = useState(false)
	const [transitionChange, setTransitionChange] = useRecoilState(
		transitionChangeState
	)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [logoSize, setLogoSize] = useState(false)

	const handleMenuClick = () => {
		setIsMenuOpen((isMenuOpen) => !isMenuOpen)
		setTransitionChange(true)
	}

	const handleCloseMenu = () => {
		setIsMenuOpen(false)
	}

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
			<header className={colorChange ? "scroll-opacity" : ""}>
				{!isLoggedIn ? (
					<NavLink to="/shoppingcart">
						<IoCartOutline
							className="cart-button"
							aria-label="Gå till kundvagnen"
						/>
					</NavLink>
				) : (
					<div className="logged-in-container"> Inloggad</div>
				)}

				{!isLoggedIn ? (
					<NavLink to="/">
						<img
							className={logoSize ? "scroll-size" : "logo"}
							src={logo}
							alt="logo"
						/>
					</NavLink>
				) : (
					<img
						className={logoSize ? "scroll-size" : "logo"}
						src={logo}
						alt="logo"
					/>
				)}

				{!isLoggedIn ? (
					<GiHamburger
						className="hamburger-button"
						aria-label="Öppna navigeringsmeny"
						onClick={handleMenuClick}
					/>
				) : (
					<GiHamburger className="hamburger" />
				)}
			</header>
			<AnimatePresence>
				{isMenuOpen && (
					<Navmeny
						isMenuOpen={isMenuOpen}
						handleCloseMenu={handleCloseMenu}
					/>
				)}
			</AnimatePresence>

			{isMenuOpen && (
				<style>
					{`
    body {
        overflow: hidden;
    }
    `}
				</style>
			)}
		</>
	)
}

export default Header
