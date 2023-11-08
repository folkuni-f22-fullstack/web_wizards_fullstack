import {  Outlet } from 'react-router-dom'
import  Header  from '../Components/Header'

const Root = () => {
	return (
		<>
		<Header />
		<Outlet /> 
		</>
	)
}

export default Root