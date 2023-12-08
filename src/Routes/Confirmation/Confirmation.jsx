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
import { putOrder } from "../../utils/APIfrontendFunctions/PutOrder"
import { NavLink } from "react-router-dom"

const Confirmation = () => {
	const userInput = useRecoilValue(costumerAtom)
	const cartItems = useRecoilValue(cartItemState)
	const removeFromCart = useRemoveFromCart()
	const [, setCartItems] = useRecoilState(cartItemState)
	const orderData = useRecoilValue(orderDataState)
	const [confirmationOrderData, setConfirmationOrderData ] = useState({})
	const [hideState, setHideState] = useState(false)

	useEffect(() => {
		const savedCartItems = localStorage.getItem('cartItems');
		if (savedCartItems) {
			setCartItems(JSON.parse(savedCartItems));
		} 
	}, []);
	
	
	useEffect(() => {
		// console.log('i useEffecten: ', cartItems);
		if (cartItems.length > 0) { 
			localStorage.setItem('cartItems', JSON.stringify(cartItems));
		}
	}, [cartItems])


	const handleRemoveFromCart = (name) => {
		removeFromCart(name)
		// console.log("removed")
	}

	
	const handleInputMessage = (event, item) => {
        const orderItems = cartItems.map((cartItem) => cartItem.name === item?.name ? {...cartItem, message: event.target.value} : cartItem
        )
        setCartItems(orderItems)
    }


	const handleDeleteOrder = async () => {
		try {
			const ordersId = orderData.orderId
			await deleteOrder(ordersId)
			localStorage.clear()
			setCartItems([])
			// console.log(ordersId)
			// console.log("Order deleted successfully")
		} catch (error) {
			console.error("Failed to delete order", error.message)
		}
	}

	const updateOrder = async () => {
		try {
			const ordersId = orderData.orderId
			const data = await getOrdersId(ordersId)
			setConfirmationOrderData(data.order)
			
			// console.log("Orders updated successfully" , confirmationOrderData)
		} catch (error) {
			console.error("Error updating orders:", error)
		}
		// console.log('Är den låst eller inte?' , confirmationOrderData.orderLocked)
	}

	const handleDecreaseQuantity = (name) => {
		const updatedOrderItems = cartItems.map((item) =>
			item.name === name && item.amount > 1
				? {
						...item,
						amount: item.amount - 1,
						priceTotal: item.price * (item.amount - 1),
				}
				: item
		)
		setCartItems(updatedOrderItems)
	}

	const handleIncreaseQuantity = (name) => {
		const updatedOrderItems = cartItems.map((item) =>
			item.name === name
				? {
						...item,
						amount: item.amount + 1,
						priceTotal: item.price * (item.amount + 1),
				}
				: item
		)
		setCartItems(updatedOrderItems)
	}

	const countUpdatedPriceTotal = cartItems.reduce(
		(total, item) => total + item.priceTotal,
		0
	)

	const changedOrderSubmit = async () => {
		const updatedOrder = {
			items: [{
				pk: "orders",
				ordersId: orderData.orderId,
				orderContent: {
				cartItems: cartItems.map((dish) => ({
					amount: dish.amount,
					name: dish.name,
					image: dish.image,
					message: dish.message,
					staffmessage: dish.staffmessage,
					description: dish.description,
					price: dish.price,
					priceTotal: dish.priceTotal
				})),
				},
				costumerInfo: userInput,	
				orderLocked: false,
				orderReady: false,
		}]
	}
			
		
		setHideState(true)
		await putOrder(updatedOrder, orderData.orderId)
		// console.log("ändrade order:", updatedOrder)
		
	}

	return (
		<section className="confirmation_container">
			<h1 className="head_confirmation">Bekräftelse</h1>
			<div className="update-container">
				<button className="staff-button" onClick={() => updateOrder()}>
					<FiRefreshCcw />
				</button>
			</div>
			<div className="order_confirmation_info">
				<h2>Ordernummer: {orderData.orderId} </h2>
				{confirmationOrderData ? (!confirmationOrderData.orderLocked  ?
				<div className="open_order_text">
					<h3>Nu är din order skickad till restaurangen.</h3>
					<p className={!hideState ? "" : "hidden"}> Vill du ändra något i din beställning? </p>
					<p className={!hideState ? "" : "hidden"}>Passa på nu innan beställningen blir låst.</p>
				</div> :
				(!confirmationOrderData.orderReady ?
				<div className="locked_order_text">
				<h3>Nu är din beställning låst och maten tillagas</h3>
				</div> :
				<div className="order_ready_text">
					<h3> Nu är din order redo för upphämtning</h3>
				</div> )) : null
				}
			</div> 

			<h3 className="head_your_order">Din beställning: </h3>

			<section className={confirmationOrderData && !confirmationOrderData.orderLocked ? "shopping-cart order-container-confirmation" : "blur"}> 
				{cartItems.map(dish => ( 
					<li key={dish.name} 
					className= 
					"card-container order-menu confirmation_order_container">
						<div className="image-container">
							<img src={dish.image} alt={dish.name} />
						</div>
						<div className="name-container">
							<h4>{dish.name}</h4>
						</div>
						<p className="description-text description-text-confirmation">{dish.description}</p>
						<div className={!hideState ? "button-container button-container-confirmation" : "hidden"}>
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
							className={!hideState ? "dumpster" : "hidden"}
						>
							<IoTrashSharp className="trashbin" />
						</div>
						<div className="input confirmation-input">
							<p className={!hideState ? "change_text" : "hidden"}>Ändra/ta bort i din rätt:</p>
							<input
								onChange={(event) =>
									handleInputMessage(event, dish)
								}
								className={!hideState ? "input change" : "hidden"}
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
				className={confirmationOrderData && !confirmationOrderData.orderLocked ? "change-order-button" : "grey"}
				onClick={() => changedOrderSubmit(cartItems)}
			>
				Ändra order
			</button>
			<NavLink to="/">
				<button
					type="submit"
					className={confirmationOrderData && !confirmationOrderData.orderLocked ? "delete-order-button" : "grey"}
					onClick={handleDeleteOrder}
				>
					Ångra order
				</button>
			</NavLink>
		</section>
	)
}

export default Confirmation
