
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { activeChefTabState } from "../../data/atom";
import { activeTabState } from "../../data/atom";
import { LuChefHat } from "react-icons/lu";
import './tabs.css'

const ChefTab = () => {

	const [activeTab, setActiveTab] = useRecoilState(activeTabState)
	const [activeChefTab, setActiveChefTab] = useRecoilState(activeChefTabState)

	const activeChefTabClick = () => {
		if(!activeChefTab) {
			setActiveTab(false)
			setActiveChefTab(true)
		} else {
			setActiveChefTab(false)}
		}
		



	return(
		<div className={activeChefTab ? 'active-chef-tab' : 'chef-tab-container'}>
			<NavLink 
				to='/Chef'
				onClick={activeChefTabClick}>
				<LuChefHat className={ activeChefTab ? 'active-logo' : ''} />
			</NavLink>
		</div>
	)
}

export default ChefTab