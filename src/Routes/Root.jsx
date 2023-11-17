import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Floater from "../Components/Floater"

const handleFabClick = () => {
	console.log("FAB Clicked!")
}

const Root = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
				<Floater onClick={handleFabClick} />
			</main>
			<Footer />
		</>
	)
}

export default Root
