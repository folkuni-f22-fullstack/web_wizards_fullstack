import "./login.css"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { Navigate } from "react-router-dom"
import { NameInput, PassInput, IsMatching } from "./handleLogin"
import { uNameAtom, uPassAtom } from "../../data/atom"



const Login = () => {
	const [uName, setUName] = useRecoilState(uNameAtom)
	const [uPass, setUPass] = useRecoilState(uPassAtom)
	const [shouldNavigate, setShouldNavigate] = useState(false)
	const [formIsDirty, setFormIsDirty] = useState(false)
	
	const loginMatch = IsMatching()

	const loginErrorMessage = formIsDirty ? 'Vänligen kontrollera inloggningsuppgifter' : ''
	
	const handleSubmit = (event) => {
		event.preventDefault()
		
		if(loginMatch) {
			setShouldNavigate(true)
			setUName('')
			setUPass('')
		}else{setFormIsDirty(true)}
	}

	if (shouldNavigate) {
		return <Navigate to='login/cashier'/>		
	}

	return (
		<>
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
						<div className="error-message-container">{formIsDirty? loginErrorMessage : ''}</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login

