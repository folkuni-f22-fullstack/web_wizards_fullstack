import "./login.css"
import { testUser } from "../../data/testdata"
import { useState } from "react"
import { Navigate } from "react-router-dom"




const Login = () => {

	const [uName, setUName] = useState('')
	const [uPass, setUPass] = useState('')
	const [shouldNavigate, setShouldNavigate] =useState(false)

	

const HandleNameChange = () =>{
	setUName(event.target.value)
}

const HandlePassChange = () => {
	setUPass(event.target.value)
}

const handleSubmit = (event) => {
	event.preventDefault()
	const match = testUser.find(user => user.name === uName && user.password === uPass)
	if(match !== undefined) {
		setShouldNavigate(true)
	}else{console.log('fel inloggningsuppgifter');}
}

if (shouldNavigate) {
	return <Navigate to='login/cashier'/>
}

	return (
		<>
			<div className=" login-container">
				<div className="login">
					<h2 className="login-header">Personalinloggning</h2>
					<form className="login-form" action="">
						<p className="form-text">Användarnamn</p>
						<label htmlFor="username"></label>
						<input 
							className="input-field" 
							type="text"
							value={uName}
							id= 'username'
							onChange={HandleNameChange} 
							required/>
						<p className="form-text password">Lösenord</p>
						<label htmlFor="password"></label>
						<input 
							className="input-field" 
							type="text"
							value={uPass}
							id="password"
							onChange={HandlePassChange} 
							required/>
							
						<button 
						className="loginbutton"
						type="submit"
						onClick={handleSubmit}
						>Logga in</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login



	/* function useIsValidName () {
	  const [uName] =testUser

	  const allowedUserName = testUser.find (user => user.name === uName)

	  if(!allowedUserName) {
		return [false,  'Vänligen skriv in giltigt användarnamn']
	  }
	  return  [true, '']

	}
 */
