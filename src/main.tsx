import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import router from "./Routes/routeconfig.js"
import { RecoilRoot } from "recoil"
// import Floater from "../src/Components/Floater.jsx"
import "./index.css"

// const handleFabClick = () => {
// 	console.log("FAB Clicked!")
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RecoilRoot>
			<RouterProvider router={router} />
			{/* <Floater onClick={handleFabClick} /> */}
		</RecoilRoot>
	</React.StrictMode>
)
