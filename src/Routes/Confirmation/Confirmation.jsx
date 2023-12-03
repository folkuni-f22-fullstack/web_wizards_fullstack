import "./confirmation.css"
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


// eventuella states som kan behövas för att rendera om beställningen är öppen eller låst: 

const Confirmation = () => {
	const userInput = useRecoilValue(costumerAtom) /* <--Detta har jag lagt till ifall jag ska ha?*/
	const cartItems = useRecoilValue(cartItemState)
	const removeFromCart = useRemoveFromCart()
	const [, setCartItems] = useRecoilState(cartItemState)

	const [data, setData] = useState({})

	useEffect(() => {
		const fetchData = async () => {

			const ordersId = "LR91B9PTdRUCCKqXz-dM4"
			const orderData = await getOrdersId(ordersId)
			setData(orderData)
			console.log('orderid ', orderData)
		}
		fetchData()
	}, [])

	console.log('useState data : ', data);

	const orderContent = data.order && data.order.orderContent
	console.log('Min ordercontent: ', orderContent)

	const orderId = data.order && data.order.ordersId

	console.log('ordernumret: ', orderId)
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

	const handleInputMessage = (event, item) => {
		const orderItems = orderContent.cartItems.map((cartItem) => cartItem.name === item?.name ? {...cartItem, message: event.target.value} : cartItem
		)
		setCartItems(orderItems)
	}

	return (
		<section className="confirmation_container">
			<h1 className="head_confirmation">Bekräftelse</h1>
			<div className="update-container">
				<button className="update-button">
                        <FiRefreshCcw />
                </button>
			</div>
			<div className="order_confirmation_info">
					<h2>Ordernummer: {data.order && data.order.ordersId} </h2>
				 <div className="open_order_text">
					<h3>Nu är din order skickad till restaurangen.</h3>
					
					<p> Vill du ändra något i din beställning? </p>
					<p>Passa på nu innan beställningen blir låst.</p>
				</div> 
				{/* <div className="locked_order_text">
					<h3>Nu är din beställning låst och maten tillagas</h3>
				</div> */}
			</div>
			
				<h3 className="head_your_order">Din beställning: </h3>

			<section className="shopping-cart">
			{orderContent && orderContent.cartItems.map(item => (
				<li key={item.name} className="card-container order-menu">
					
					<div className="image-container">
						<img src={item.image} />
					</div>
					<div className="name-container">
						<h3>{item.name}</h3>
					</div>
					<p className="description-text">{item.description}</p>
					<div className="button-container">
						<IoRemoveOutline className="remove-food"/>
						<p>{item.amount}</p>
						<IoMdAdd className="add-food" />
					</div>
					<p className="food-price">{item.priceTotal} :-</p>
					<div onClick={() => handleRemoveFromCart(item.name)} className="dumpster">
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
