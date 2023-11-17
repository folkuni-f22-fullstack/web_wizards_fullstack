import "./Shoppingcart.css"
import { useRecoilValue } from "recoil"
import { cartItemsAtom } from "../../data/atom"


const ShoppingCart = () => {
	// const cart = useRecoilValue(cartItemsAtom)
	return (
		<>
		<section className="shopping-cart">
		<h1>Varukorg</h1>
			{/* <div className="order-card-container"> */}
				<div className="card-container">
					<div>bilden</div>
					<div>Namnet</div>
					<div>description</div>
					<div>korg</div>
					<div className="button-container">
						<button>-</button>
						<p>1</p>
						<button>+</button>
					</div>
					<p>Ändra/ta bort i din beställning:</p>
					<input />
				</div>
			{/* </div> */}
				<div className="sum-order-container">
					<p>Totalt: </p> 
					<p></p>
			</div>
		</section>
		</>
	)
}

export default ShoppingCart
