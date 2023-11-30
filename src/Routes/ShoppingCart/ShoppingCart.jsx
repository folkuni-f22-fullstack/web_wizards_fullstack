import CostumerForm from "../../utils/costumerForms/CostumerForm"
import "./ShoppingCart.css"
import { useRecoilValue } from "recoil"
import { cartItemState } from "../../data/atom.js"
import { IoMdAdd } from "react-icons/io"
import { IoRemoveOutline, IoTrashSharp } from "react-icons/io5"
import  useRemoveFromCart from "../../utils/removeFromCart"
import { postOrder } from "../../data/PostOrder"
import { costumerAtom } from "../../data/atom"


const ShoppingCart = () => {
	const userInput = useRecoilValue(costumerAtom)
	const cartItems = useRecoilValue(cartItemState)
	const removeFromCart = useRemoveFromCart()
	
	console.log(cartItems)
	const handleRemoveFromCart = (name) => {
		removeFromCart(name)
		console.log('removed')
	}
	const countPriceTotal = cartItems.reduce((total, cartItem) => total + cartItem.priceTotal, 0)

	const handleOrderSubmit = async (event) => {
		try {
		
			await postOrder(cartItems, userInput)
			console.log('success, order är skikad till restaurang', cartItems, userInput)
			event.preventDefault
		} catch (error) {
			console.error('error, order inte skickad', error.message )
		}
	}

	return (
		<>
				<h1 className="cart-h1">VARUKORG</h1>		
			<section className="shopping-cart">
				{cartItems.map(item => (
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
						<input name={item.message} onChange={(event) => event.target.value} className="input change"/>
					</div>

					
				</li>))}
				<div className="sum-order-container">
					<p>Totalt:</p> 
					<p>{countPriceTotal} :- </p>
				</div>
			</section>
			<CostumerForm/>
			<button 
			type="submit"
			className="order-submit-button"
			onClick={() => handleOrderSubmit(cartItems, userInput)}
			>Bekräfta</button>
		</>
	)
}

export default ShoppingCart
