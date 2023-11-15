import { isLoggedInAtom, isLoggingOutAtom} from "../../data/atom";
import { useRecoilState } from "recoil";
import { NavLink } from "react-router-dom";

import { CgLogOut } from "react-icons/cg";

const LogOut = () => {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
	const [isLoggingOut, setIsLoggingOut] = useRecoilState(isLoggingOutAtom)

	const handleOnclick = () => {	
		//  setUName('')
		setIsLoggedIn(false)
		setIsLoggingOut(true)
			
	}

	return(
		<div className="logout-container">
			<NavLink 
				to='/login'
				onClick={handleOnclick}>
				<CgLogOut />
			</NavLink>
		</div>
	)
}

export default LogOut