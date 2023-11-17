import "./Shoppingcart.css"

const ShoppingCart = () => {
	return (
		<section className="shopping-cart">
		<h1>Varukorg</h1>
			<div className="order-card-container">
				<ul>
				</ul>	
			</div>
			<div className="sum-order-container">
				<p>Totalt: </p> 
			</div>
		</section>
	)
}

export default ShoppingCart
