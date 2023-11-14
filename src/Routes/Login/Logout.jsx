import { isLoggedInAtom } from "../../data/atom";
import { useRecoilState } from "recoil";
import { NavLink } from "react-router-dom";

import { CgLogOut } from "react-icons/cg";

const LogOut = () => {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)

	const handleOnclick = () => {	
		setIsLoggedIn(false)	
	}

	return(
		<div className="logout-container">
			<NavLink 
				to='/'
				onClick={handleOnclick}>
				<CgLogOut />
			</NavLink>
		</div>
	)
}

export default LogOut