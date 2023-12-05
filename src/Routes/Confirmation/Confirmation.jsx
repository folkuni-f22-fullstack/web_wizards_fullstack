import "./confirmation.css"
import { FiRefreshCcw } from "react-icons/fi"
import { useEffect, useState } from "react"
import { useRecoilValue, useRecoilState } from "recoil"
import { cartItemState } from "../../data/atom"
import getOrdersId from "../../utils/APIfrontendFunctions/GetOrdersId"
import { IoRemoveOutline, IoTrashSharp } from "react-icons/io5"
import { IoMdAdd } from "react-icons/io"
import useRemoveFromCart from "../../utils/removeFromCart"
import { costumerAtom } from "../../data/atom"
import { orderDataState } from "../../data/atom"
import deleteOrder from "../../utils/APIfrontendFunctions/DeleteOrders"
import getOrders from "../../utils/APIfrontendFunctions/getOrders"
import { putOrder } from "../../utils/APIfrontendFunctions/PutOrder"

const Confirmation = () => {
	const [orders, setOrders] = useState([])
	const userInput = useRecoilValue(costumerAtom)
	const cartItems = useRecoilValue(cartItemState)
	const removeFromCart = useRemoveFromCart()
	const [, setCartItems] = useRecoilState(cartItemState)
	const orderData = useRecoilValue(orderDataState)
	const [orderItems, setOrderItems] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const ordersId = orderData.orderId
				const data = await getOrdersId(ordersId)
				setOrderItems(data.order.orderContent.cartItems || [])
			} catch (error) {
				console.error("Error fetching order data", error)
			}
		}

		fetchData()
	}, [orderData])

	const handleRemoveFromCart = (name) => {
		removeFromCart(name)
		console.log("removed")
	}

	const handleInputMessage = (event, item) => {
		const updatedOrderItems = orderItems.map((cartItem) =>
			cartItem.name === item?.name
				? { ...cartItem, message: event.target.value }
				: cartItem
		)
		setOrderItems(updatedOrderItems)
	}

	const handleDeleteOrder = async () => {
		try {
			const ordersId = orderData.orderId
			await deleteOrder(ordersId)
			console.log(ordersId)
			console.log("Order deleted successfully")
		} catch (error) {
			console.error("Failed to delete order", error.message)
		}
	}

	const updateOrders = async () => {
		try {
			const updatedData = await getOrders()
			setOrders(updatedData.items)
			console.log("Orders updated successfully")
		} catch (error) {
			console.error("Error updating orders:", error)
		}
	}

	const handleIncreaseQuantity = (name) => {
		const updatedOrderItems = orderItems.map((item) =>
			item.name === name
				? {
						...item,
						amount: item.amount + 1,
						priceTotal: item.price * (item.amount + 1),
				  }
				: item
		)
		setOrderItems(updatedOrderItems)
	}

	const handleDecreaseQuantity = (name) => {
		const updatedOrderItems = orderItems.map((item) =>
			item.name === name && item.amount > 1
				? {
						...item,
						amount: item.amount - 1,
						priceTotal: item.price * (item.amount - 1),
				  }
				: item
		)
		setOrderItems(updatedOrderItems)
	}

	const countUpdatedPriceTotal = orderItems.reduce(
		(total, item) => total + item.priceTotal,
		0
	)

	const changedOrderSubmit = async () => {
		const changedOrder = {
			ordersId: orderData.orderId,

			orderContent: {
				cartItems: cartItems.map((dish) => ({
					amount: dish.amount,
					name: dish.name,
					image: dish.image,
					message: dish.message,
					staffmessage: dish.staffmessage,
					description: dish.description,
				})),
				costumerInfo: userInput,
			},
			orderLocked: false,
			orderReady: false,
		}

		await putOrder(changedOrder, orderData.orderId)
		console.log("ändrade order:", changedOrder)
	}

	return (
		<section className="confirmation_container">
			<h1 className="head_confirmation">Bekräftelse</h1>
			<div className="update-container">
				<button className="staff-button" onClick={updateOrders}>
					<FiRefreshCcw />
				</button>
			</div>
			<div className="order_confirmation_info">
				<h2>Ordernummer: {orderData.orderId} </h2>
				<div className="open_order_text">
					<h3>Nu är din order skickad till restaurangen.</h3>
					<p> Vill du ändra något i din beställning? </p>
					<p>Passa på nu innan beställningen blir låst.</p>
				</div>
			</div>

			<h3 className="head_your_order">Din beställning: </h3>

			<section className="shopping-cart">
				{orderItems.map((dish) => (
					<li key={dish.name} className="card-container order-menu">
						<div className="image-container">
							<img src={dish.image} alt={dish.name} />
						</div>
						<div className="name-container">
							<h3>{dish.name}</h3>
						</div>
						<p className="description-text">{dish.description}</p>
						<div className="button-container">
							<IoRemoveOutline
								className="remove-food"
								onClick={() =>
									handleDecreaseQuantity(dish.name)
								}
							/>
							<p>{dish.amount}</p>
							<IoMdAdd
								className="add-food"
								onClick={() =>
									handleIncreaseQuantity(dish.name)
								}
							/>
						</div>
						<p className="food-price">{dish.priceTotal} :-</p>
						<div
							onClick={() => handleRemoveFromCart(dish.name)}
							className="dumpster"
						>
							<IoTrashSharp className="trashbin" />
						</div>
						<div className="input">
							<p>Ändra/ta bort i din rätt:</p>
							<input
								onChange={(event) =>
									handleInputMessage(event, dish)
								}
								className="input change"
							/>
						</div>
					</li>
				))}
				<div className="sum-order-container">
					<p>Totalt:</p>
					<p>{countUpdatedPriceTotal} :- </p>
				</div>
			</section>
			<button
				type="submit"
				className="change-order-button"
				onClick={() => changedOrderSubmit(cartItems)}
			>
				Ändra order
			</button>
			<button
				type="submit"
				className="delete-order-button"
				onClick={handleDeleteOrder}
			>
				Ångra order
			</button>
		</section>
	)
}

export default Confirmation
