import { createBrowserRouter } from "react-router-dom"
import Root from "./Root.jsx"
import Startpage from "./Startpage.jsx"
import Login from "./Login/Login.jsx"
import FoodMenu from "./Foodmenu/FoodMenu.jsx"
import ShoppingCart from "./ShoppingCart/ShoppingCart.jsx"
import Confirmation from "./Confirmation/Confirmation.jsx"
import Cashier from "./Cashier/Cashier.jsx"
import Chef from "./Chef/Chef.jsx"

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
				children: [
					{
						path: "/cashier",
						element: <Cashier />,
					},
					{
						path: "/chef",
						element: <Chef />,
					},
				],
			},
			{
				path: "/menu",
				element: <FoodMenu />,
			},
			{
				path: "/Shoppingcart",
				element: <ShoppingCart />,
				children: [
					{
						path: "/confirmation",
						element: <Confirmation />,
					},
				],
			},
		],
	},
])

export default router
