import "./cashier.css"
import KeepLoggedIn from "../../utils/login/KeepLoggedIn"
import { FiRefreshCcw } from "react-icons/fi"
import { IoRemoveOutline } from "react-icons/io5"
import { IoMdAdd } from "react-icons/io"
import { useEffect } from "react"
import { useState } from "react"
import getOrders from "../../utils/APIfrontendFunctions/getOrders"

const Cashier = () => {
	const [ordersData, setOrdersData] = useState([])
	const [orderQuantities, setOrderQuantities] = useState({})

	const handleIncreaseAmount = (orderId, dishName) => {
		setOrderQuantities((prevQuantities) => {
			const currentQuantity = prevQuantities[dishName] || 0
			return {
				...prevQuantities,
				[dishName]: currentQuantity + 1,
			}
		})
	}

	const handleDecreaseAmount = (orderId, dishName) => {
		setOrderQuantities((prevQuantities) => {
			const currentQuantity = prevQuantities[dishName] || 0
			// Ensure the quantity doesn't go below 0
			const newQuantity = Math.max(0, currentQuantity - 1)
			return {
				...prevQuantities,
				[dishName]: newQuantity,
			}
		})
	}

	useEffect(() => {
		const fetchData = async () => {
			const data = await getOrders()
			setOrdersData(data.items)
		}
		fetchData()
	}, [])

	const orders = ordersData ? [...ordersData] : []

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
												{" "}
												<div className="add-delete-button-container">
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
												<p className="order_amount">
													{orderQuantities[
														dish.name
													] || dish.amount}{" "}
													st
												</p>
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
											<p className="order_dish">
												{dish.name}
											</p>
											<div className="changes">
												<p>
													Meddelande: {dish.message}
												</p>
											</div>
											<div className="staff_changes">
												<p>
													Meddelande från personalen:{" "}
													{dish.staffmessage}
												</p>
											</div>
											<div className="ingredients">
												<p>
													Ingredienser:{" "}
													{dish.description}
												</p>
											</div>
											<div className="staff_price">
												<p>
													Pris:{" "}
													{dish.price * dish.amount}{" "}
													:-
												</p>
											</div>
										</li>
									))}
							</ul>
							<div className="send_btn">
								<button> SKICKA TILL KÖKET </button>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Cashier
