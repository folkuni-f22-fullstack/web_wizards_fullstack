import { createBrowserRouter } from "react-router-dom"
import Root from "./Root.jsx"
import Startpage from "./Startpage.jsx"
import Login from "./Login/Login.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Startpage />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
])

export default router
