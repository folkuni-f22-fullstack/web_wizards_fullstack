import { NavLink } from "react-router-dom"
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	let error = useRouteError();
	console.error(error);
	return(
	<div className="error-page">
		<p>Hoppsan! Den här sidan verkar inte finnas.</p>
		<p><NavLink to='/'>Åter till startsidan</NavLink></p>
	</div>
	
	)
}

export default ErrorPage