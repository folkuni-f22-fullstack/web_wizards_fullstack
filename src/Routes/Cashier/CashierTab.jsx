import { NavLink } from "react-router-dom";

import { FaCashRegister } from "react-icons/fa6";
import './Cashier.css'
import { useState } from "react";

const CashierTab = () => {
	const [activeTab, setActiveTab] = useState(false)

	const activeTabClick = () => {
		setActiveTab(true)
	}

	return(
		<div className= {activeTab ? 'active-tab' : 'cashier-tab-container'}>
			<NavLink 
				to='/cashier'
				onClick={activeTabClick}>	
				<FaCashRegister />
			</NavLink>
		</div>
	)
}

export default CashierTab

