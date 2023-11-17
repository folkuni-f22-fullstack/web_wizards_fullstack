import React from "react"
import { Link } from "react-router-dom"

import "./floater.css"
import { IoFastFoodOutline } from "react-icons/io5"
IoFastFoodOutline

const handleFabClick = () => {
	console.log("FAB Clicked!")
}
const Floater = () => {
	return (
		<Link to="/menu">
			<button className="floater">
				<IoFastFoodOutline
					className="floater-logo"
					onClick={handleFabClick}
				/>
				<p className="floater-text">Beställ Här</p>
			</button>
		</Link>
	)
}

export default Floater
