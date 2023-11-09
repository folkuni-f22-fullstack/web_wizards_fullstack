import "./login.css"

const Login = () => {
	return (
		<>
			<div className=" login-container">
				<div className="login">
					<h2 className="login-header">Personalinloggning</h2>
					<form className="login-form" action="">
						<p className="form-text">Användarnamn</p>
						<label htmlFor=""></label>
						<input className="input-field" type="text" />
						<p className="form-text">Lösenord</p>
						<label htmlFor="">
							<input className="input-field" type="text" />
						</label>
						<button className="loginbutton">Logga in</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login
