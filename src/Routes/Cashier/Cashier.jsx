import "./cashier.css"
import { isLoggedInAtom } from "../../data/atom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";


//TODO kolla över loggedIn, felmeddelande i konsollen!!
const Cashier = () => {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
	
	useEffect(() => {
		if (!isLoggedIn) {
			setIsLoggedIn(true)
		}
	}, [isLoggedIn, setIsLoggedIn])
	setIsLoggedIn(true)
	console.log('hello from cashier');
	
	
	return (
		<>
		
		<p>hello</p>
		
		</>
	)
}

export default Cashier
