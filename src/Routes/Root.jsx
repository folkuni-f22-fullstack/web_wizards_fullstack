import {  Outlet } from 'react-router-dom'
import Navmeny from "../Components/Navmeny"

const Root = () => {
	return (
		<>
		<Navmeny />
		<Outlet /> 
		</>
	)
}

export default Root