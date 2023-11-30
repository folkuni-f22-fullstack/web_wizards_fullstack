import "./cashier.css"
 import KeepLoggedIn from "../../utils/login/KeepLoggedIn";
// import { useRecoilState } from "recoil";
// import { useState } from "react";
/* import getOrders from "../../utils/APIfrontendFunctions/getOrders";

const dborders = getOrders()
console.log(dborders); */


const Cashier = () => {

	// const [orders, setOrders] = useState()

	// testvariabel:
	const orders = [
		{ 	ordersId: "1234",
			orderOpen: false,
			orderContent: [
				{
					name: "Bliss",
					description: "tomat",
					price: 79,
					amount: 1,
					message:"ingen tomat"
			
				},
				{
					name: "Halloumi",
					description: "gurka",
					price: 79,
					amount: 2,
					message:"ingen gurka"			
				}
				],
			costumerInfo:{
				firstname: "my",
				familyname: "Myson",
				phone: 123546,
				email: "abc@abs"
				}
		},
		{ 	ordersId: "5678",
			orderOpen: true,
			orderContent: [
				{
					name: "Blobb",
					description: "tomat",
					price: 79,
					amount: 1,
					message:"ingen tomat"
			
				},
				{
					name: "Orginal",
					description: "gurka",
					price: 79,
					amount: 2,
					message:"ingen gurka"			
				}
				],
				costumerInfo:{
				firstname: "my",
				familyname: "Myson",
				phone: 123546,
				email: "abc@abs"
				}
		}
	
	]

	console.log('orders: ',orders);

	const orderContent = orders.flatMap(dish => dish.orderContent)
	console.log("orderContent:", orderContent)


	return ( 
		<section className="cashier_page">
		<KeepLoggedIn/>
		<p>Kassa</p>
		<h1>Beställningar</h1>
		
		<div className="costumer_order_container">
			<ul>
				{orders.map(order => (
				<li className="costumer_order_card"
					key={order.ordersId}>
						<p className="order_number">order: {order.ordersId}</p>
						<p className="order_open">{order.orderOpen ? "Order öppen" : "Order låst"}</p>
						<ul>
						{order.orderContent.map(dish => (
							<li className="card-container order-card-dish "
								key={dish.name}>	
								<p className="order_amount">{dish.amount} st</p>		
								<p className="order_dish">{dish.name}</p>
								<div className="changes">
									<p>Meddelande: {dish.message}</p>
								</div>
							</li>
							))}
						</ul>
					<div className="send_btn"><button> SKICKA TILL KÖKET </button></div>
				</li>
				))}
			</ul>
		</div>
		</section>
	)
}

export default Cashier


