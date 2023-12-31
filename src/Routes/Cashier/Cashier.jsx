import "./cashier.css"
import KeepLoggedIn from "../../utils/login/KeepLoggedIn"
import { FiRefreshCcw } from "react-icons/fi"
import { IoRemoveOutline } from "react-icons/io5"
import { IoMdAdd } from "react-icons/io"
import { IoCheckmark } from "react-icons/io5"
import { FaLock } from "react-icons/fa"
import { FaLockOpen } from "react-icons/fa"
import { useEffect, useState } from "react"
import getOrders from "../../utils/APIfrontendFunctions/GetOrders"
import { putOrder } from "../../utils/APIfrontendFunctions/PutOrder"

const Cashier = () => {
	const [ordersData, setOrdersData] = useState([])
	const [orderQuantities, setOrderQuantities] = useState({})
	const [staffMessage, setStaffMessage] = useState({})
	const [dishDescriptions, setDishDescriptions] = useState({})

	const orders = ordersData ? [...ordersData] : []

	useEffect(() => {
		const fetchData = async () => {
			const data = await getOrders()
			setOrdersData(data.items)
		}
		fetchData()
	}, [])

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
		// console.log("staffMessage:", message)
	}

	const handleOnClickSend = async (orderId, cartItems) => {
		if (!Array.isArray(cartItems)) {
			// console.error("Invalid cartItems:", cartItems)
			return
		}

		// Hitta den aktuella ordern baserat på orderId
		const currentOrder = orders.find((order) => order.ordersId === orderId)

		const updatedOrder = {
			items: [
				{
					pk: "orders",
					ordersId: orderId,
					orderContent: {
						cartItems: cartItems.map((dish) => ({
							amount: orderQuantities[dish.name] || dish.amount,
							name: dish.name,
							image: dish.image,
							message: dish.message,
							staffMessage:
								staffMessage[`${orderId}-${dish.name}`] ||
								dish.staffMessage,
							description:
								dishDescriptions[`${orderId}-${dish.name}`] ||
								dish.description,
							price: dish.price,
							priceTotal:
								dish.price * orderQuantities[dish.name] ||
								dish.amount,
						})),
					},
					costumerInfo: {
						email: currentOrder.costumerInfo.email,
						familyName: currentOrder.costumerInfo.familyName,
						firstName: currentOrder.costumerInfo.firstName,
						phone: currentOrder.costumerInfo.phone,
					},
					orderLocked: true,
					orderReady: false,
				},
			],
		}
		// console.log("updatedOrder", updatedOrder)

		await putOrder(updatedOrder, orderId)
	}

	const updateOrders = async () => {
		try {
			const updatedData = await getOrders()
			setOrdersData(updatedData.items)
			// console.log("Orders updated successfully")
		} catch (error) {
			// console.error("Error updating orders:", error)
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
							{/* {console.log("Order Content:", order.orderContent)} */}
							<div className="order_status_container">
								<p className="order_open">
									{order.orderContent &&
									order.orderLocked !== undefined ? (
										order.orderLocked ? (
											<>
												Order låst <FaLock />
											</>
										) : (
											<>
												Order öppen <FaLockOpen />
											</>
										)
									) : (
										"Order status unknown"
									)}
								</p>
								{/* {console.log(
									"Order Ready:",
									order.orderContent.orderReady
								)} */}
								<p className="order_ready">
									{order.orderContent &&
									order.orderReady !== undefined ? (
										order.orderReady ? (
											<>
												Order klar <IoCheckmark />
											</>
										) : null
									) : null}
								</p>
							</div>

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
