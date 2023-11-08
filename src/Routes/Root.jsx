import {  Outlet } from 'react-router-dom'
import Navmeny from "../Components/Navmeny"
import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"

const Root = () => {
	return (
		<>
		<Navmeny />
		<main>
			<Outlet />
			<Footer />
		</main>
		</>
	)
}

export default Root
