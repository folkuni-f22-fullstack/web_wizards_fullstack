import "./cashier.css"
import KeepLoggedIn from "../../utils/login/KeepLoggedIn"
import { FiRefreshCcw } from "react-icons/fi"
import { IoRemoveOutline } from "react-icons/io5"
import { IoCheckmark } from "react-icons/io5"
import { IoMdAdd } from "react-icons/io"
import { useEffect, useState } from "react"
import getOrders from "../../utils/APIfrontendFunctions/GetOrders"
import { putOrder } from "../../utils/APIfrontendFunctions/PutOrder"

const Cashier = () => {
	const [ordersData, setOrdersData] = useState([])
	const [orderQuantities, setOrderQuantities] = useState({})
	const [staffMessage, setStaffMessage] = useState({})
	const [dishDescriptions, setDishDescriptions] = useState({})

	const handleIncreaseAmount = (ordersId, dishName) => {
		setOrderQuantities((prevQuantities) => {
			const currentQuantity = prevQuantities[dishName] || 0
			return {
				...prevQuantities,
				[dishName]: currentQuantity + 1,
			}
		})
	}

	const handleDecreaseAmount = (ordersId, dishName) => {
		setOrderQuantities((prevQuantities) => {
			const currentQuantity = prevQuantities[dishName] || 0
			const newQuantity = Math.max(0, currentQuantity - 1)
			return {
				...prevQuantities,
				[dishName]: newQuantity,
			}
		})
	}

	const handleChangeDescription = (ordersId, dish, description) => {
		setDishDescriptions((prev) => ({
			...prev,
			[`${ordersId}-${dish}`]: description,
		}))
	}

	const handleInputStaffMessage = (orderId, dishName, message) => {
		setStaffMessage((prevMessages) => ({
			...prevMessages,
			[`${orderId}-${dishName}`]: message,
		}))
		console.log("staffMessage:", message)
	}

	useEffect(() => {
		const fetchData = async () => {
			const data = await getOrders()
			setOrdersData(data.items)
		}
		fetchData()
	}, [])

	const orders = ordersData ? [...ordersData] : []

	const handleOnClickSend = async (orderId, cartItems) => {
		console.log("skicka till köket")
		try {
			if (!Array.isArray(cartItems)) {
				console.error("Invalid cartItems:", cartItems)
				alert("Invalid cart items. Please try again.")
				return
			}

			const updatedOrder = {
				ordersId: orderId,
				orderContent: {
					cartItems: cartItems.map((dish) => ({
						amount: dish.amount,
						name: dish.name,
						message: dish.message,
						staffMessage: dish.staffMessage,
						description: dish.description,
					})),
				},
				orderLocked: true,
			}

			await putOrder(updatedOrder, orderId)
		} catch (error) {
			console.error("Error updating order:", error)
			alert("Failed to update order. Please try again later.")
		}
	}

	const updateOrders = async () => {
		try {
			const updatedData = await getOrders()
			setOrdersData(updatedData.items)
			console.log("Orders updated successfully")
		} catch (error) {
			console.error("Error updating orders:", error)
		}
	}

	return (
		<section className="cashier_page">
			<KeepLoggedIn />
			<p>Kassa</p>
			<div className="header-button-container">
				<h1>Beställningar</h1>
				<div className="staff-button-container">
					<button
						className="staff-button"
						onClick={() => updateOrders()}
					>
						<FiRefreshCcw />
					</button>
				</div>
			</div>
			<div className="costumer_order_container">
				<ul>
					{orders.map((order) => (
						<li
							className="costumer_order_card"
							key={order.ordersId}
						>
							<p className="order_number">
								order: {order.ordersId}
							</p>
							{console.log("Order Content:", order.orderContent)}
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
							<ul>
								{order.orderContent &&
									order.orderContent.cartItems &&
									order.orderContent.cartItems.map((dish) => (
										<li
											className="card-container order-card-dish"
											key={dish.name}
										>
											<div className="order_amount_container">
												<div className="add-delete-button-container">
													<div
														onClick={() =>
															handleIncreaseAmount(
																order.ordersId,
																dish.name
															)
														}
													>
														<IoMdAdd className="add-food" />
													</div>
												</div>
												<p className="order_amount">
													{orderQuantities[
														dish.name
													] || dish.amount}
													st
												</p>
												<div
													onClick={() =>
														handleDecreaseAmount(
															order.ordersId,
															dish.name
														)
													}
												>
													<IoRemoveOutline className="remove-food" />
												</div>
											</div>
											<p className="order_dish">
												{dish.name}
											</p>
											<div className="changes">
												<p>
													Meddelande: {dish.message}
												</p>
											</div>
											<div className="staff_changes">
												<input
													type="text"
													placeholder="Skicka meddelande till kocken"
													value={
														staffMessage[
															`${order.ordersId}-${dish.name}`
														] ||
														dish.staffMessage ||
														""
													}
													onChange={(event) =>
														handleInputStaffMessage(
															order.ordersId,
															dish.name,
															event.target.value
														)
													}
												/>
											</div>
											<div className="ingredients">
												<input
													value={
														dishDescriptions[
															`${order.ordersId}-${dish.name}`
														] || dish.description
													}
													onChange={(e) =>
														handleChangeDescription(
															order.ordersId,
															dish.name,
															e.target.value
														)
													}
												/>

												<p className="dish_description">
													{dishDescriptions[
														`${order.ordersId}-${dish.name}`
													] || dish.description}
												</p>
											</div>
											<div className="staff_price">
												<p>
													Pris:
													{dish.price *
														(orderQuantities[
															dish.name
														] || dish.amount)}
													:-
												</p>
											</div>
										</li>
									))}
							</ul>
							<div className="send_btn">
								<button
									onClick={() =>
										handleOnClickSend(
											order.ordersId,
											order.orderContent.cartItems
										)
									}
									disabled={
										order.orderContent &&
										order.orderContent.orderLocked
									}
								>
									SKICKA TILL KÖKET
								</button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Cashier
