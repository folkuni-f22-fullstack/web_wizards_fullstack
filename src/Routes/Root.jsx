import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"

const Root = () => {
	return (
		<main>
			<Outlet />
			<Footer />
		</main>
	)
}

export default Root
