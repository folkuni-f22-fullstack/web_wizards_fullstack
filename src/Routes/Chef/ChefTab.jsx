
import { NavLink } from "react-router-dom";

import { LuChefHat } from "react-icons/lu";
import './Chef.css'
const ChefTab = () => {



	return(
		<div className="chef-tab-container">
			<NavLink 
				to='/Chef'>
				<LuChefHat />
			</NavLink>
		</div>
	)
}

export default ChefTab