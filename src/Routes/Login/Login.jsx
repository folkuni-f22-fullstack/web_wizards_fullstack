import "./login.css"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { Navigate } from "react-router-dom"
import { NameInput, PassInput, IsMatching } from "./handleLogin"
import { uNameAtom, uPassAtom, formIsDirtyAtom, isLoggedInAtom, isDisabledAtom } from "../../data/atom"
import KeepLoggedIn from "../Login/keepLoggedIn";


const Login = () => {
	const [uName, setUName] = useRecoilState(uNameAtom)
	const [uPass, setUPass] = useRecoilState(uPassAtom)
	const [shouldNavigate, setShouldNavigate] = useState(false)
	const [formIsDirty, setFormIsDirty] = useRecoilState(formIsDirtyAtom)
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
	const [isDisabled, setIsDisabled] = useRecoilState(isDisabledAtom)

	const loginMatch = IsMatching()
	const isLoggedInMessage = isDisabled ? 'Du är redan inloggad, logga först ut om du vill logga in som annan användare' : ''
	const loginErrorMessage = formIsDirty ? 'Vänligen kontrollera inloggningsuppgifterna' : ''


	const handleSubmit = (event) => {
		event.preventDefault()
		if(isLoggedIn){
			setIsDisabled(true)
		}else if (loginMatch) {
				setShouldNavigate(true)
				setUPass('')
				// setUName('')
				setFormIsDirty(false)
				setIsLoggedIn(true)
		}else{setFormIsDirty(true)}			
	}

	if (shouldNavigate) {
		return <Navigate to='/cashier'/>		
	}

	return (
		<>
		{!isLoggedIn ? null: <KeepLoggedIn/>}
			<div className=" login-container">
				<div className="login">				
					<form className="login-form" action="">
						<h2 className="login-header">Personalinloggning</h2>
						<NameInput/>						
						<PassInput/>							
						<button 
							className="loginbutton"
							type="submit"
							disabled = {isDisabled}
							onClick={handleSubmit}
							>Logga in</button>
						<div className="error-message-container"> {loginErrorMessage}</div>
						<div className="error-message-container"> {isLoggedInMessage}</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login

