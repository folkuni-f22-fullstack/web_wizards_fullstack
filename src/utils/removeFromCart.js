
import { useRecoilState } from "recoil"
import { cartItemState } from "../data/atom"

const useRemoveFromCart = () => {
	const [cartItems, setCartItems] = useRecoilState(cartItemState)
	const RemoveFromCart = (name) => {
	console.log('removeFRomCart körs', name)
	
	const updatedCart = cartItems.filter(item => item.name !== name)
	setCartItems(updatedCart)

	
	console.log('removeFromCart funktionen körs och tar bort en vara')
}
return RemoveFromCart
}



export default useRemoveFromCart

