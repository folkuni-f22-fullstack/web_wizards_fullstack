import "./cashier.css"
import KeepLoggedIn from "../../utils/login/KeepLoggedIn"
import { FiRefreshCcw } from "react-icons/fi"
import { IoRemoveOutline } from "react-icons/io5"
import { IoMdAdd } from "react-icons/io"
import { useEffect, useState } from "react"
import getOrders from "../../utils/APIfrontendFunctions/GetOrders"

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

	/* const handleOnClickSend = async () => {
		await putOrder
	} */

	// const updatedOrders = orders.map((order) => {
	// 	if (
	// 		order &&
	// 		order.ordersId === ordersId &&
	// 		order.orderContent &&
	// 		order.orderContent.cartItems
	// 	) {
	// 		const updatedCartItems = order.ordersContent.cartItems.map(
	// 			(item) => {
	// 				if (item.name === dishName) {
	// 					return { ...item, staffMessage: event.target.value }
	// 				}

	// 				return item
	// 			}
	// 		)
	// 		return {
	// 			...order,
	// 			orderContent: {
	// 				...order.orderContent,
	// 				cartItems: updatedCartItems,
	// 			},
	// 		}
	// 	}
	// 	return order
	// })
	// setOrdersData(updatedOrders)
	// console.log(updatedOrders)

	return (
		<section className="cashier_page">
			<KeepLoggedIn />
			<p>Kassa</p>
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
					{orders.map((order) => (
						<li
							className="costumer_order_card"
							key={order.ordersId}
						>
							<p className="order_number">
								order: {order.ordersId}
							</p>
							<p className="order_open">
								{order.orderOpen ? "Order öppen" : "Order låst"}
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

												<p>
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
								{/* <button onClick={handleOnClickSend}>
									SKICKA TILL KÖKET
								</button> */}
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Cashier
