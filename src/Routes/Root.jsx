import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"

const Root = () => {
	return (
		<>
			<Outlet />
			<Footer />
		</>
	)
}

export default Root
