import "./cashier.css"
import { isLoggedInAtom } from "../../data/atom";
import { useRecoilState } from "recoil";


//TODO kolla över loggedIn, felmeddelande i konsollen!!
const Cashier = () => {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
	setIsLoggedIn(true)
	console.log('hello from cashier');
	return (
		<>
		
		<p>hello</p>
		
		</>
	)
}

export default Cashier
