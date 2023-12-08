
const increaseAmountInCart = (name, cartItems, increase = true) => {
	const dishInCart = cartItems.find((dish) => dish.name === name); 

	if(dishInCart) {
		let newCart = cartItems.map((dish) => {
			if (dish.name === name) {
				const newAmount = increase ? dish.amount + 1 : Math.max(dish.amount - 1, 1)
				return {
					...dish, 
					priceTotal: increase ? (dish.price * newAmount) : (dish.priceTotal - dish.price),
					amount: newAmount
				};
			} else {
				return dish; 
			}
		})
		return newCart; 
	} else {
		// console.log(`Item with name ${name} not found in cartItems `)
		return cartItems; 
	}
}

export default increaseAmountInCart