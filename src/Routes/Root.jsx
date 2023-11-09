import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import  Header  from '../Components/Header'

const Root = () => {
	return (
		<>
		<Header />
		<main>
			<Outlet />
			<Footer />
		</main>
		</>
	)
}

export default Root
