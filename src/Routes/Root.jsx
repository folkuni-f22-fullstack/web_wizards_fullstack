import {  Outlet } from 'react-router-dom'
import Navmeny from "../Components/Navmeny"
import Footer from "../Components/Footer"
import  Header  from '../Components/Header'

const Root = () => {
	return (
		<>
		<Navmeny />
		<Header />
		<main>
			<Outlet />
			<Footer />
		</main>
		</>
	)
}

export default Root
