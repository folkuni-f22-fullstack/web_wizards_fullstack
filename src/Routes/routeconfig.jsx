import { createBrowserRouter } from "react-router-dom";
import  Root  from "./Root.jsx";
import Startpage from "./Startpage.jsx";
import FoodMenu from "./FoodMenu/FoodMenu.jsx"
import Login from "./Login/Login.jsx"
import ShoppingCart from "./ShoppingCart/ShoppingCart.jsx"
import Confirmation from "./Confirmation/Confirmation.jsx"
import Cashier from "./Cashier/Chasier.jsx";
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
						path: "login/cashier",
						element: <Cashier />,
					},
					{
						path: "login/chef",
						element: <Chef />,
					},
				],
			},
			{
				path: "/menu",
				element: <FoodMenu />,
			},
			{
				path: "/shoppingcart",
				element: <ShoppingCart />,
			},
			{
				path: "/confirmation",
				element: <Confirmation />,
			},
		]
	},
])

export default router
