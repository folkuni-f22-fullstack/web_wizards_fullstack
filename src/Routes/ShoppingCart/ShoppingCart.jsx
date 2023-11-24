import CostumerForm from "../../utils/CostumerForm"
import "./ShoppingCart.css"
import { useRecoilValue } from "recoil"
import { cartItemsAtom } from "../../data/atom"
import { IoMdAdd } from "react-icons/io"
import { IoRemoveOutline, IoTrashSharp } from "react-icons/io5"


const ShoppingCart = () => {
	// const cart = useRecoilValue(cartItemsAtom)
	return (
		<>
				<h1 className="cart-h1">VARUKORG</h1>		
			<section className="shopping-cart">
				<li className="card-container order-menu">
					<div className="image-container">
						<p>bilden</p>
					</div>
					<div className="name-container">
						<h3>Namnet</h3>
					</div>
					<p className="description-text">description detta är texten</p>
					<div className="button-container">
						<IoRemoveOutline className="remove-food"/>
						<p>1</p>
						<IoMdAdd className="add-food" />
					</div>
					<p className="food-price">109 :-</p>
					<div className="dumpster">
						<IoTrashSharp  className="trashbin"/>
					</div>
					<div className="input">
						<p>Ändra/ta bort i din beställning:</p>
						<input className="input change"/>
					</div>
				</li>
				<div className="sum-order-container">
					<p>Totalt: </p> 
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
