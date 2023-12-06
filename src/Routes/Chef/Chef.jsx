import "./Chef.css"
import KeepLoggedIn from "../../utils/login/KeepLoggedIn"
import getOrders from "../../utils/APIfrontendFunctions/getOrders"
import { FiRefreshCcw } from "react-icons/fi"
import { useState, useEffect } from "react"

const Chef = () => {
	const [orders, setOrders] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const menuData = await getOrders()
				setOrders(menuData.items)
			} catch (error) {
				console.error("Error fetching orders:", error)
			}
		}

		fetchData()
	}, [])

	// // testvariabel:
	// const orders = [
	// 	{
	// 		ordersId: "1234",
	// 		orderOpen: false,
	// 		orderContent: [
	// 			{
	// 				name: "Bliss",
	// 				description: "tomat",
	// 				price: 79,
	// 				amount: 1,
	// 				message: "ingen tomat",
	// 			},
	// 			{
	// 				name: "Halloumi",
	// 				description: "gurka",
	// 				price: 79,
	// 				amount: 2,
	// 				message: "ingen gurka",
	// 			},
	// 		],
	// 		costumerInfo: {
	// 			firstname: "my",
	// 			familyname: "Myson",
	// 			phone: 123546,
	// 			email: "abc@abs",
	// 		},
	// 	},
	// 	{
	// 		ordersId: "5678",
	// 		orderOpen: true,
	// 		orderContent: [
	// 			{
	// 				name: "Blobb",
	// 				description: "tomat",
	// 				price: 79,
	// 				amount: 1,
	// 				message: "ingen tomat",
	// 			},
	// 			{
	// 				name: "Orginal",
	// 				description: "gurka",
	// 				price: 79,
	// 				amount: 2,
	// 				message: "ingen gurka",
	// 			},
	// 		],
	// 		costumerInfo: {
	// 			firstname: "my",
	// 			familyname: "Myson",
	// 			phone: 123546,
	// 			email: "abc@abs",
	// 		},
	// 	},
	// ]

	const filteredOrders = orders.filter(
		(order) => order.orderContent && !order.orderContent.orderLocked
	)

	const orderContent = filteredOrders.flatMap((dish) => dish.orderContent)
	console.log(orderContent, "orderContent")

	const updateOrders = async () => {
		try {
			const updatedData = await getOrders()
			setOrders(updatedData.items)
			console.log("Orders updated successfully")
		} catch (error) {
			console.error("Error updating orders:", error)
		}
	}

	return (
		<section className="chef_container">
			<KeepLoggedIn />
			<p>Kocken</p>
			<div className="header-button-container">
				<h1>Beställningar</h1>
				<div className="staff-button-container">
					<button className="staff-button" onClick={updateOrders}>
						<FiRefreshCcw />
					</button>
				</div>
			</div>

			<div className="costumer_order_container">
				<ul>
					{filteredOrders.map((order) => {
						console.log(order.orderLocked)
						return (
							<li
								className="costumer_order_card"
								key={order.ordersId}
							>
								<p className="order_number">
									order: {order.ordersId}
								</p>
								<p className="order_open">
									{order &&
									order.orderLocked !== undefined
										? order.orderLocked
											? "Order låst"
											: "Order öppen"
										: "Order status unknown"}
								</p>
								<ul>
									{order.orderContent &&
										order.orderContent.cartItems &&
										order.orderContent.cartItems.map(
											(dish) => (
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
														<p>
															Meddelande:{" "}
															{dish.message}
														</p>
													</div>
													<div className="staff_changes">
														<p>
															Meddelande från
															personalen:{" "}
															{dish.staffMessage}
														</p>
													</div>
													<div className="ingredients">
														<p>
															Ingredienser:{" "}
															{dish.description}
														</p>
													</div>
												</li>
											)
										)}
								</ul>
								<div className="send_btn">
									<button> ORDER KLAR </button>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	)
}
export default Chef
