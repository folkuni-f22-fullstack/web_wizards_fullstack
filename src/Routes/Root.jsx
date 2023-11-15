import {  Outlet } from 'react-router-dom'
import Footer from "../Components/Footer"
import Header from "../Components/Header"

const Root = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default Root
