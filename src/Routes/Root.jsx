import { Outlet, useLocation } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Floater from "../Components/Floater"
import CashierTab from "../Components/CashierTab"
import ChefTab from "../Components/ChefTab"
import { isLoggedInAtom } from "../data/atom"
import { useRecoilState } from "recoil"
import LogOut from "../utils/login/Logout"
import ScrollToTop from "../utils/scrollToTop.js"

const Root = () => {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
	const location = useLocation()

	const isFoodMenuPage = location.pathname === "/menu"
	const isConfirmation = location.pathname === "/confirmation"
	const isLogin = location.pathname === "/login"

	return (
		<>
			<Header />
			<ScrollToTop />
			{isLoggedIn ? <LogOut /> : null}
			{isLoggedIn ? <CashierTab /> : null}
			{isLoggedIn ? <ChefTab /> : null}
			<main>
				{!isLoggedIn &&
				!isFoodMenuPage &&
				!isConfirmation &&
				!isLogin ? (
					<Floater />
				) : null}
				<Outlet />
			</main>
			{!isLoggedIn ? <Footer /> : null}
		</>
	)
}

export default Root
