import "./confirmation.css"

// Behöver importera datan från varukorgen så att vi kan mappa ut den.
import { FiRefreshCcw } from "react-icons/fi" 
import { useEffect, useState } from "react"
import { useRecoilValue, useRecoilState } from 'recoil'
import { cartItemState } from "../../data/atom"
import getOrdersId from "../../utils/APIfrontendFunctions/GetOrdersId"
import { IoRemoveOutline, IoTrashSharp } from "react-icons/io5"
import { IoMdAdd } from "react-icons/io"
import useRemoveFromCart from "../../utils/removeFromCart"
// import { putOrder } from "../../utils/APIfrontendFunctions/PostOrder"
import { costumerAtom } from "../../data/atom"
import { orderDataState } from "../../data/atom"


// eventuella states som kan behövas för att rendera om beställningen är öppen eller låst: 

const Confirmation = () => {
	
	const userInput = useRecoilValue(costumerAtom) /* <--Detta har jag lagt till ifall jag ska ha?*/
	const cartItems = useRecoilValue(cartItemState)
	const removeFromCart = useRemoveFromCart()
	const [, setCartItems] = useRecoilState(cartItemState)
	const orderData = useRecoilValue(orderDataState)
	const [confirmationOrderData, setConfirmationOrderData ] = useState({})

	// const [data, setData] = useState({})
	console.log('detta ligger i orderData:' , orderData)
	useEffect(() => {
		const fetchData = async () => {

			const ordersId = orderData.orderId
			const data = await getOrdersId(ordersId)
			// setData(orderData)
			console.log(ordersId)
			console.log('data:' , data)
			setConfirmationOrderData(data.order.orderContent)
			
		}
		fetchData()
		
	}, [orderData])
console.log('cartItem:', confirmationOrderData )
/* 	const order = confirmationOrderData ? [...confirmationOrderData] : []
 */
	// console.log('useState data : ', data);

	// const orderContent = order.orderContent &&
	// order.orderContent.cartItems &&
	// order.orderContent.cartItems
	// console.log('Min ordercontent: ', orderContent)

	// const orderId = data.order && data.order.ordersId

	// console.log('ordernumret: ', orderId)
	// const handleClickUpdate = () => {
	// 	setOpenOrder(!openOrder)
	// }
	const handleRemoveFromCart = (name) => {
		removeFromCart(name)
		console.log('removed')
	}
	// const countPriceTotal = cartItems.reduce((total, cartItem) => total + cartItem.priceTotal, 0)

	// const handleOrderChangeSubmit = async (event) => {
	// 	try {
	// 		event.preventDefualt 

	// 		await setCartItems((prevCartItems) => [...prevCartItems])

	// 		await putOrder(cartItems, userInput, ordersId)
	// 		console.log("sucess, den ändrade ordern är skickad till restaurangen.")
	// 		cartItems, 
	// 		userInput
	// 	} catch (error) {
	// 		console.log("error, orderns ändringar är inte skickade.", error.message)
	// 	}
	// }

	const updateOrder = async () => {
		try {
			const ordersId = orderData.orderId
			await getOrdersId(ordersId)
			console.log("Orders updated successfully")
		} catch (error) {
			console.error("Error updating orders:", error)
		}
	}

	const handleInputMessage = (event, item) => {
		const orderItems = orderContent.cartItems.map((cartItem) => cartItem.name === item?.name ? {...cartItem, message: event.target.value} : cartItem
		)
		setCartItems(orderItems)
	}
	
	return (
		<section className="confirmation_container">
			<h1 className="head_confirmation">Bekräftelse</h1>
			<div className="update-container">
				<button onClick={() => updateOrder()} className="update-button">
                        <FiRefreshCcw />
                </button>
			</div>
			<div className="order_confirmation_info">
					<h2>Ordernummer: {orderData.orderId}</h2>
				{confirmationOrderData && !confirmationOrderData.orderLocked ?	
				<div className="open_order_text">
					<h3>Nu är din order skickad till restaurangen.</h3>
					
					<p> Vill du ändra något i din beställning? </p>
					<p>Passa på nu innan beställningen blir låst.</p>
				</div> :
				<div className="locked_order_text">
					<h3>Nu är din beställning låst och maten tillagas</h3>
				</div> }

			</div>
			
				<h3 className="head_your_order">Din beställning: </h3>

			<section className={confirmationOrderData && !confirmationOrderData.orderLocked ? "shopping-cart"  : "blur"}> {
			confirmationOrderData && confirmationOrderData.cartItems && confirmationOrderData.cartItems.map(dish => (
				<li key={dish.name} className="card-container order-menu">
					
					<div className="image-container">
						<img src={dish.image} />
					</div>
					<div className="name-container">
						<h3>{dish.name}</h3>
					</div>
					<p className="description-text">{dish.description}</p>
					<div className="button-container">
						<IoRemoveOutline className="remove-food"/>
						<p>{dish.amount}</p>
						<IoMdAdd className="add-food" />
					</div>
					<p className="food-price">{dish.priceTotal} :-</p>
					<div onClick={() => handleRemoveFromCart(dish.name)} className="dumpster">
						<IoTrashSharp  className="trashbin"/>
					</div>
					<div className="input">
						<p>Ändra/ta bort i din rätt:</p>
						<input 
							onChange={(event) => 
								handleInputMessage(event, item)}	
							className="input change"
						/>
					</div>
					
				</li>))}
				{/* <div className="sum-order-container">
					<p>Totalt:</p> 
					<p>{countPriceTotal} :- </p>
				</div> */}
			</section>
			<button
				type="submit"
				className="change-order-button"
				// onClick={() => handleOrderChangeSubmit(cartItems)}
			>
				Ändra order
			</button>

		</section>
	)
}

export default Confirmation
