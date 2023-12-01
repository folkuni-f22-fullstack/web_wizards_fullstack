import "./cashier.css"
import KeepLoggedIn from "../../utils/login/KeepLoggedIn"
import { FiRefreshCcw } from "react-icons/fi"
import { useEffect } from "react"
 import { useState } from "react";
 import getOrders from "../../utils/APIfrontendFunctions/getOrders";



const Cashier = () => {
	 const [ordersData, setOrdersData] = useState([])
	 

	useEffect(() => {
		const fetchData = async () => {
			const data = await getOrders()
			setOrdersData(data.items)
			
		}
		fetchData()
	}, [])

	const orders = ordersData ? [...ordersData]: []
	
	return (
		<section className="cashier_page">
			<KeepLoggedIn />
			<p>Kassa</p>
			<h1>Beställningar</h1>
			<button>
				<FiRefreshCcw />
			</button>
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
								{order.orderContent && order.orderContent.cartItems && order.orderContent.cartItems.map((dish) => (
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


