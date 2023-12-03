import CostumerForm from "../../utils/costumerForms/CostumerForm"
import "./ShoppingCart.css"
import { useRecoilValue, useRecoilState } from "recoil"
import { cartItemState } from "../../data/atom.js"
import { IoMdAdd } from "react-icons/io"
import { IoRemoveOutline, IoTrashSharp } from "react-icons/io5"
import useRemoveFromCart from "../../utils/removeFromCart"
import  {postOrder} from "../../utils/APIfrontendFunctions/PostOrder"
import { costumerAtom } from "../../data/atom"
import { orderDataState } from "../../data/atom.js"

const ShoppingCart = () => {
	const userInput = useRecoilValue(costumerAtom)
	const cartItems = useRecoilValue(cartItemState)
	const removeFromCart = useRemoveFromCart()
	const [, setCartItems] = useRecoilState(cartItemState)
	const [orderData, setOrderData ] = useRecoilState(orderDataState)
	console.log(cartItems)
	const handleRemoveFromCart = (name) => {
		removeFromCart(name)
		console.log("removed")
	}
	const countPriceTotal = cartItems.reduce(
		(total, cartItem) => total + cartItem.priceTotal,
		0
	)

	const handleOrderSubmit = async (event) => {
		try {
			event.preventDefault

			await setCartItems((prevCartItems) => [...prevCartItems])

			const responseOrder =
			await postOrder(cartItems, userInput)
			console.log(
				"success, order är skickad till restaurang",
				cartItems,
				userInput
			)
			setOrderData(responseOrder)
			console.log(orderData)
		} catch (error) {
			console.error("error, order inte skickad", error.message)
		}
	}

	const handleInputMessage = (event, item) => {
		const orderItems = cartItems.map((cartItem) =>
			cartItem.name === item?.name
				? { ...cartItem, message: event.target.value }
				: cartItem
		)

		setCartItems(orderItems)
	}

	return (
		<>
			<h1 className="cart-h1">VARUKORG</h1>
			<section className="shopping-cart">
				{cartItems.map((item) => (
					<li key={item.name} className="card-container order-menu">
						<div className="image-container">
							<img src={item.image} />
						</div>
						<div className="name-container">
							<h3>{item.name}</h3>
						</div>
						<p className="description-text">{item.description}</p>
						<div className="button-container">
							<IoRemoveOutline className="remove-food" />
							<p>{item.amount}</p>
							<IoMdAdd className="add-food" />
						</div>
						<p className="food-price">{item.priceTotal} :-</p>
						<div
							onClick={() => handleRemoveFromCart(item.name)}
							className="dumpster"
						>
							<IoTrashSharp className="trashbin" />
						</div>
						<div className="input">
							<p>Ändra/ta bort i din rätt:</p>
							<input
								onChange={(event) =>
									handleInputMessage(event, item)
								}
								className="input change"
							/>
						</div>
					</li>
				))}
				<div className="sum-order-container">
					<p>Totalt:</p>
					<p>{countPriceTotal} :- </p>
				</div>
			</section>
			<CostumerForm />
			<button
				type="submit"
				className="order-submit-button"
				onClick={() => handleOrderSubmit(cartItems, userInput)}
			>
				Bekräfta
			</button>
		</>
	)
}

export default ShoppingCart
