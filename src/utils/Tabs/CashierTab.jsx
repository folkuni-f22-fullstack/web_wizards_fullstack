import { NavLink } from "react-router-dom";
import { FaCashRegister } from "react-icons/fa6";
import './tabs.css'
import { useRecoilState } from "recoil";
import { activeTabState } from "../../data/atom";
import { activeChefTabState } from "../../data/atom";

const CashierTab = () => {
	const [activeTab, setActiveTab] = useRecoilState(activeTabState)
	const [activeChefTab, setActiveChefTab] = useRecoilState(activeChefTabState)

	const activeTabClick = () => {
		if(!activeTab) {
			setActiveTab(true)
			setActiveChefTab(false)
		} else {
			setActiveTab(false)}
		
	}

	return(
		<div className= {activeTab ? 'active-tab' : 'cashier-tab-container'}>
			<NavLink 
				to='/cashier'
				onClick={activeTabClick}>	
				<FaCashRegister className={ activeTab ? 'active-logo' : ''} />
			</NavLink>
		</div>
	)
}

export default CashierTab

