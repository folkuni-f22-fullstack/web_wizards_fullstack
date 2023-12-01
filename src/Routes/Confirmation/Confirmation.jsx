import "./confirmation.css"
import { FiRefreshCcw } from "react-icons/fi" 
import { useEffect, useState } from "react"
import { useRecoilValue } from 'recoil'
import { cartItemState } from "../../data/atom"
import getOrdersId from "../../utils/APIfrontendFunctions/GetOrdersId"
import useRemoveFromCart from "../../utils/removeFromCart"
// import '../ShoppingCart/ShoppingCart.css'

// Behöver importera datan från varukorgen så att vi kan mappa ut den.

// eventuella states som kan behövas för att rendera om beställningen är öppen eller låst: 

const Confirmation = () => {
	const cartItems = useRecoilValue(cartItemState)
	// const removeFromCart = useRemoveFromCart()

	const [data, setData] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			const ordersId = await getOrdersId()
			setData(ordersId)
			console.log('orderid ', ordersId)
		}
		fetchData()
	}, [])

	console.log('useState data : ', data);

	const order = data.order.orderContent

	console.log('order', order);


	// const handleClickUpdate = () => {
	// 	setOpenOrder(!openOrder)
	// }
	// const handleRemoveFromCart = (name) => {
	// 	removeFromCart(name)
	// 	console.log('removed')
	// }
	const countPriceTotal = cartItems.reduce((total, cartItem) => total + cartItem.priceTotal, 0)

	return (
		<section className="confirmation_container">
			<h1 className="head_confirmation">Bekräftelse</h1>
			<div className="update-container">
				{/* <button onClick={handleClickUpdate} className="update-button">
                        <FiRefreshCcw />
                </button> */}
			</div>
			<div className="order_confirmation_info">
					<h2>Ordernummer: </h2>
				 <div className="open_order_text">
					<h3>Nu är din order skickad till restaurangen.</h3>
					
					<p> Vill du ändra något i din beställning? </p>
					<p>Passa på nu innan beställningen blir låst.</p>
				</div> :
				<div className="locked_order_text">
					<h3>Nu är din beställning låst och maten tillagas</h3>
				</div>
			</div>
			
				<h3 className="head_your_order">Din beställning: </h3>

			<section className="shopping-cart">
			{order.cartItems.map(item => (
				<li key={item.name} className="card-container order-menu">
					
					<div className="image-container">
						<img src={item.image} />
					</div>
					<div className="name-container">
						<h3>{item.name}</h3>
					</div>
					<p className="description-text">{item.description}</p>
					{/* <div className="button-container">
						<IoRemoveOutline className="remove-food"/>
						<p>{item.amount}</p>
						<IoMdAdd className="add-food" />
					</div> */}
					<p className="food-price">{item.priceTotal} :-</p>
					{/* <div onClick={() => handleRemoveFromCart(item.name)} className="dumpster">
						<IoTrashSharp  className="trashbin"/>
					</div> */}
					<div className="input">
						<p>Ändra/ta bort i din rätt:</p>
						<input className="input change"/>
					</div>
					
				</li>))}
				<div className="sum-order-container">
					<p>Totalt:</p> 
					<p>{countPriceTotal} :- </p>
				</div>
			</section>

		</section>
	)
}

export default Confirmation
