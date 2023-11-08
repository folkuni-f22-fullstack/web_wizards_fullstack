import { createBrowserRouter } from "react-router-dom";
import  Root  from "./Root.jsx";
import Startpage from "./Startpage.jsx";
import FoodMenu from "./FoodMenu.jsx"

const router = createBrowserRouter ([
	{
		path: '/',
		element: <Root />,
				children: [
					{
						path: '/',
						element: <Startpage />
					},

					{
						path: 'menu',
						element: <FoodMenu />
					}
				

				]
	}
])

export default router