import "./login.css"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { Navigate } from "react-router-dom"
import { NameInput, PassInput, IsMatching } from "./handleLogin"
import { uNameAtom, uPassAtom, formIsDirtyAtom, isLoggedInAtom } from "../../data/atom"
import KeepLoggedIn from "../Login/keepLoggedIn";


const Login = () => {
	const [uName, setUName] = useRecoilState(uNameAtom)
	const [uPass, setUPass] = useRecoilState(uPassAtom)
	const [shouldNavigate, setShouldNavigate] = useState(false)
	const [formIsDirty, setFormIsDirty] = useRecoilState(formIsDirtyAtom)
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
	
	const loginMatch = IsMatching()
	const loginErrorMessage = formIsDirty ? 'Vänligen kontrollera inloggningsuppgifterna' : ''

	//Lägg till om redan inloggad, lägg lås så att det inte går att logga in igen! 

	const handleSubmit = (event) => {
		event.preventDefault()
		
		if(loginMatch) {
			setShouldNavigate(true)
			setUPass('')
			setFormIsDirty(false)
			setIsLoggedIn(true)
		}else{setFormIsDirty(true)}
	}

	if (shouldNavigate) {
		return <Navigate to='/cashier'/>		
	}

	return (
		<>
		<KeepLoggedIn/>
			<div className=" login-container">
				<div className="login">				
					<form className="login-form" action="">
						<h2 className="login-header">Personalinloggning</h2>
						<NameInput/>						
						<PassInput/>							
						<button 
							className="loginbutton"
							type="submit"
							onClick={handleSubmit}
							>Logga in</button>
						<div className="error-message-container"> {loginErrorMessage}</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login

