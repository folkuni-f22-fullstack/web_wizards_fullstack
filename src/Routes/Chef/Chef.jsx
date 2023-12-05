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
				console.log("Menu Data:", menuData)
				setOrders(menuData.items || [])
			} catch (error) {
				console.error("Error fetching orders:", error)
			}
		}

		fetchData()
	}, [])

	const updateOrders = async () => {
		try {
			const updatedData = await getOrders()
			console.log("Updated Data:", updatedData)
			setOrders(updatedData.items || [])
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
					{orders.length > 0 ? (
						orders.map((order) => {
							console.log("Order:", order)
							if (
								order.orderLocked !== undefined &&
								order.orderLocked
							) {
								return (
									<li
										className="costumer_order_card"
										key={order.ordersId}
									>
										<p className="order_number">
											order: {order.ordersId}
										</p>
										<p className="order_open">
											{order.orderLocked !== undefined
												? order.orderLocked
													? "Order låst"
													: "Order öppen"
												: "Order status unknown"}
										</p>
										{order.orderContent &&
											order.orderContent.cartItems && (
												<ul>
													{order.orderContent.cartItems.map(
														(dish, index) => (
															<li
																className="card-container order-card-dish"
																key={index}
															>
																<p className="order_amount">
																	{
																		dish.amount
																	}{" "}
																	st
																</p>
																<p className="order_dish">
																	{dish.name}
																</p>
																<div className="changes">
																	<p>
																		Meddelande:{" "}
																		{
																			dish.message
																		}
																	</p>
																</div>
																<div className="staff_changes">
																	<p>
																		Meddelande
																		från
																		personalen:{" "}
																		{
																			dish.staffMessage
																		}
																	</p>
																</div>
																<div className="ingredients">
																	<p>
																		Ingredienser:{" "}
																		{
																			dish.description
																		}
																	</p>
																</div>
															</li>
														)
													)}
												</ul>
											)}
										<div className="send_btn">
											<button>ORDER KLAR</button>
										</div>
									</li>
								)
							} else {
								return null // Skip rendering if the order is not locked
							}
						})
					) : (
						<p>No locked orders available</p>
					)}
				</ul>
			</div>
		</section>
	)
}

export default Chef
