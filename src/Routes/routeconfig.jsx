import { createBrowserRouter } from "react-router-dom";
import  Root  from "./Root.jsx";
import Startpage from "./startpage/Startpage.jsx";
import FoodMenu from "./FoodMenu/FoodMenu.jsx"
import Login from "./Login/Login.jsx"
import ShoppingCart from "./ShoppingCart/ShoppingCart.jsx"
import Confirmation from "./Confirmation/Confirmation.jsx"
import Cashier from "./Cashier/Cashier.jsx";
import Chef from "./Chef/Chef.jsx"
import ErrorPage from "./ErrorPage.jsx";

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
			{
				path: "/cashier",
				element: <Cashier />,
			},
			{
				path: "/chef",
				element: <Chef />,
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
				element: <Confirmation/>
			},
		],
		errorElement: <ErrorPage/>
	}
])

export default router
