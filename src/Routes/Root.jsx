import {  Outlet } from 'react-router-dom'
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { isLoggedInAtom } from '../data/atom'
import { useRecoilState } from 'recoil'
import LogOut from './Login/Logout'
import KeepLoggedIn from './Login/keepLoggedIn'


const Root = () => {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
	return (
		<>
			<Header />
			{isLoggedIn ? <LogOut/> : null}
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default Root
