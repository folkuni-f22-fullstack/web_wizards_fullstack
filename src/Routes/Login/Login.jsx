import "./login.css"

const Login = () => {
	return (
		<>
			<div className="Logincontainer">
				<form action="">
					<p>Användarnamn</p>
					<label htmlFor=""></label>
					<input type="text" />
					<p>Lösenord</p>
					<label htmlFor="">
						<input type="text" />
					</label>
					<button>Logga in</button>
				</form>
			</div>
		</>
	)
}

export default Login
