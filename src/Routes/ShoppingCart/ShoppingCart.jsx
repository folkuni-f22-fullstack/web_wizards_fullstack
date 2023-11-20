import "./Shoppingcart.css"
import { useRecoilValue } from "recoil"
import { cartItemsAtom } from "../../data/atom"
import { IoMdAdd } from "react-icons/io"
import { IoRemoveOutline, IoTrashSharp } from "react-icons/io5"


const ShoppingCart = () => {
	// const cart = useRecoilValue(cartItemsAtom)
	return (
		<>
		<section className="shopping-cart">
		<h1>Varukorg</h1>
		<li className="card-container order-menu">
				<div className="dumpster">
					<IoTrashSharp  className="trashbin"/>
				</div>
					<div className="image-container">
				<p>bilden</p>
					</div>
					<div className="name-container">
						<h3>Namnet</h3>
					</div>
					<p className="description">description detta är texten</p>
					<div className="button-container">
						<IoRemoveOutline className="remove-food"/>
						<p>1</p>
						<IoMdAdd className="add-food" />
					</div>
					<p className="price">109 :-</p>
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
		</>
	)
}

export default ShoppingCart
