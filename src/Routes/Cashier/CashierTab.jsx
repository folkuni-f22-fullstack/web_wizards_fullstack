import { NavLink } from "react-router-dom";

import { FaCashRegister } from "react-icons/fa6";
import './Cashier.css'

const CashierTab = () => {

	

	return(
		<div className="cashier-tab-container">
			<NavLink 
				to='/cashier'>
				<FaCashRegister />
			</NavLink>
		</div>
	)
}

export default CashierTab