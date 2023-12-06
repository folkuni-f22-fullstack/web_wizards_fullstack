import "./Chef.css"
import KeepLoggedIn from "../../utils/login/KeepLoggedIn"
import getOrders from "../../utils/APIfrontendFunctions/getOrders"
import { putOrder } from "../../utils/APIfrontendFunctions/PutOrder"
import { FiRefreshCcw } from "react-icons/fi"
import { useState, useEffect } from "react"

const Chef = () => {
	const [ordersData, setOrdersData] = useState([])
	const orders = ordersData ? [...ordersData] : []

	useEffect(() => {
		const fetchData = async () => {
			try {
				const menuData = await getOrders()
				console.log("Menu Data:", menuData)
				setOrdersData(menuData.items)
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
			setOrdersData(updatedData.items)
			console.log("Orders updated successfully")
		} catch (error) {
			console.error("Error updating orders:", error)
		}
	}

	console.log(orders, "ORDERS!!!!!!!!!")

	const handleOnClickSend = async (orderId, cartItems) => {
		if (!Array.isArray(cartItems)) {
			console.error("Invalid cartItems:", cartItems)
			return
		}

		// Hitta den aktuella ordern baserat på orderId
		const currentOrder = orders.find((order) => order.ordersId === orderId)
		console.log(currentOrder, "current order")
		console.log(currentOrder.costumerInfo, "costumerinfo")
		const updatedOrder = {
			items: [
				{
					pk: "orders",
					ordersId: orderId,
					orderContent: {
						cartItems: cartItems.map((dish) => ({
							amount: dish.amount,
							name: dish.name,
							image: dish.image,
							message: dish.message,
							staffMessage: dish.staffMessage,
							description: dish.description,
							price: dish.price,
							priceTotal: dish.priceTotal,
						})),
					},
					costumerInfo: {
						email: currentOrder.costumerInfo.email,
						familyName: currentOrder.costumerInfo.familyName,
						firstName: currentOrder.costumerInfo.firstName,
						phone: currentOrder.costumerInfo.phone,
					},
					orderLocked: true,
					orderReady: true,
				},
			],
		}
		console.log("updatedOrder", updatedOrder)

		await putOrder(updatedOrder, orderId)
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
										<div className="order_status_container">
											<p className="order_open">
												{order.orderContent &&
												order.orderLocked !== undefined
													? order.orderLocked
														? "Order låst "
														: "Order öppen"
													: "Order status unknown"}
											</p>
											{console.log(
												"Order Ready:",
												order.orderContent.orderReady
											)}
											<p className="order_ready">
												{order.orderContent &&
												order.orderReady !== undefined
													? order.orderReady
														? "Order klar"
														: null
													: null}
											</p>
										</div>
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
											<button
												onClick={() =>
													handleOnClickSend(
														order.ordersId,
														order.orderContent
															.cartItems,
														order.orderContent
															.costumerInfo,
														order.orderLocked,
														order.orderReady
													)
												}
											>
												ORDER KLAR
											</button>
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
