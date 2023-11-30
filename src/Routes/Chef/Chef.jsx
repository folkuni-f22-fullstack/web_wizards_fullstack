import "./Chef.css"
import KeepLoggedIn from "../../utils/login/KeepLoggedIn"
import getOrders from "../../utils/APIfrontendFunctions/getOrders"
import { FiRefreshCcw } from "react-icons/fi"
import { useState, useEffect } from "react"

const Chef = () => {
	//Get enbart om orderOpen === false

	// const [data, setData] = useState([])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const menuData = await getMenu()
	// 		setData(menuData.items)
	// 	}
	// 	fetchData()
	// }, [])

	// testvariabel:
	const orders = [
		{
			ordersId: "1234",
			orderOpen: false,
			orderContent: [
				{
					name: "Bliss",
					description: "tomat",
					price: 79,
					amount: 1,
					message: "ingen tomat",
				},
				{
					name: "Halloumi",
					description: "gurka",
					price: 79,
					amount: 2,
					message: "ingen gurka",
				},
			],
			costumerInfo: {
				firstname: "my",
				familyname: "Myson",
				phone: 123546,
				email: "abc@abs",
			},
		},
		{
			ordersId: "5678",
			orderOpen: true,
			orderContent: [
				{
					name: "Blobb",
					description: "tomat",
					price: 79,
					amount: 1,
					message: "ingen tomat",
				},
				{
					name: "Orginal",
					description: "gurka",
					price: 79,
					amount: 2,
					message: "ingen gurka",
				},
			],
			costumerInfo: {
				firstname: "my",
				familyname: "Myson",
				phone: 123546,
				email: "abc@abs",
			},
		},
	]

	return (
		<section className="chef_container">
			<KeepLoggedIn />
			<p>Kocken</p>
			<div className="header-button-container">
				<h1>Beställningar</h1>
				<div className="staff-button-container">
					<button className="staff-button">
						<FiRefreshCcw />
					</button>
				</div>
			</div>

			<div className="costumer_order_container">
				<div className="costumer_order_card">
					<p className="order_number">"ordernummer"</p>
					<p className="order_dish">"vara"</p>
					<div className="changes">
						<p>"eventuella ändringar"</p>
					</div>
					<div className="send_btn">
						<button> ORDER REDO</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Chef
