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

	const filteredOrders = orders.filter((order) => !order.orderOpen)

	const orderContent = filteredOrders.flatMap((dish) => dish.orderContent)
	console.log(orderContent, "orderContent")

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
				<ul>
					{filteredOrders.map((order) => (
						<li
							className="costumer_order_card"
							key={order.ordersId}
						>
							<p className="order_number">
								order: {order.ordersId}
							</p>
							<ul>
								{order.orderContent.map((dish) => (
									<li
										className="card-container order-card-dish "
										key={dish.name}
									>
										<p className="order_amount">
											{dish.amount} st
										</p>
										<p className="order_dish">
											{dish.name}
										</p>
										<div className="changes">
											<p>Meddelande: {dish.message}</p>
										</div>
										<div className="staff_changes">
											<p>
												Meddelande från personalen:{" "}
												{dish.staffmessage}
											</p>
										</div>
										<div className="ingredients">
											<p>
												Ingredienser: {dish.description}
											</p>
										</div>
									</li>
								))}
							</ul>
							<div className="send_btn">
								<button> ORDER KLAR </button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Chef
