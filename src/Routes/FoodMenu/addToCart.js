import { useRecoilState } from 'recoil'
import { cartItemsAtom } from '../../data/atom'

// TODO fixa så att antal uppdateras när man lägger till fler, typ uppdatera amount först och räkna sedan itemTotal

const useCart = () => {

const [cart, setCart] = useRecoilState(cartItemsAtom)

	const addToCart = (dish) => {

		let cartItem = {
			amount: 1,
			image: dish.image,
			name: dish.name,
			description: dish.description,
			price: dish.price,
			itemTotal: dish.price
		} 

			let dishInCart = cart.find(dish => dish.name === cartItem.name)

			if (dishInCart) {
				let newCart = cart.map((dish) => {
					if(dish.name === cartItem.name){
						return{
							...dish,
							itemTotal: (2*dish.price) * dish.amount
						}
					}else{
						return dish
					}
				})
				 setCart(newCart)
				
			}else{
				const newCart = [...cart, cartItem]
				setCart(newCart)
			}
	
	}
console.log(cart);


return {cart, addToCart}
}

export default useCart