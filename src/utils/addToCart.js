import { useRecoilState } from 'recoil'
import { cartItemsAtom } from '../data/atom'



const useCart = () => {

const [cart, setCart] = useRecoilState(cartItemsAtom)

	const addToCart = (dish) => {

		let cartItem = {
			amount: 1,
			image: dish.image,
			name: dish.name,
			description: dish.description,
			price: dish.price,
			priceTotal: dish.price,
		} 

			let dishInCart = cart.find(dish => dish.name === cartItem.name)

			if (dishInCart) {
				let newCart = cart.map((dish) => {
					if(dish.name === cartItem.name){
						return{
							...dish,
							priceTotal: (2*dish.price) * dish.amount,
							amountTotal:dish.amount+1
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