import CostumerForm from "../../utils/costumerForms/CostumerForm"
import "./ShoppingCart.css"
import { useRecoilValue } from "recoil"
import { cartItemState } from "../../data/atom.js"
import { IoMdAdd } from "react-icons/io"
import { IoRemoveOutline, IoTrashSharp } from "react-icons/io5"
import  useRemoveFromCart from "../../utils/removeFromCart"


const ShoppingCart = () => {
	// const cart = useRecoilValue(cartItemsAtom)
	const cartItems = useRecoilValue(cartItemState)
	const removeFromCart = useRemoveFromCart()
	console.log(cartItems)
	const handleRemoveFromCart = (name) => {
		removeFromCart(name)
		console.log('removed')
	}
	const countPriceTotal = cartItems.reduce((total, cartItem) => total + cartItem.priceTotal, 0)
	
	

	return (
		<>
				<h1 className="cart-h1">VARUKORG</h1>		
			<section className="shopping-cart">
				{cartItems.map(item => (
				<li key={item.name} className="card-container order-menu">
					
							<div className="image-container">
						<p>{item.image}</p>
					</div>
					<div className="name-container">
						<h3>{item.name}</h3>
					</div>
					<p className="description-text">{item.description}</p>
					<div className="button-container">
						<IoRemoveOutline className="remove-food"/>
						<p>1</p>
						<IoMdAdd className="add-food" />
					</div>
					<p className="food-price">{item.priceTotal} :-</p>
					<div onClick={() => handleRemoveFromCart(item.name)} className="dumpster">
						<IoTrashSharp  className="trashbin"/>
					</div>
					<div className="input">
						<p>Ändra/ta bort i din beställning:</p>
						<input className="input change"/>
					</div>

					
				</li>))}
				<div className="sum-order-container">
					<p>{countPriceTotal} :- </p> 
					<p></p>
				</div>
			</section>
			<CostumerForm/>
			<button 
			type="submit"
			className="order-submit-button"
			>Bekräfta</button>
		</>
	)
}

export default ShoppingCart
