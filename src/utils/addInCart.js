
import { useRecoilState } from "recoil";
import { cartItemState } from "../data/atom";

const useAddInCart = () => {
	const [cartItems, setCartItems] = useRecoilState(cartItemState)

	const addInCart = (name) => {
		
		const item = cartItems.find(item => item.name === name)
		if (item) {
			item.amount += 1  
		}
		setCartItems(prevItems => {
			const itemIndex = prevItems.findIndex(item => item.name === name)
			const newItems = [...prevItems]

			newItems[itemIndex] = item; 

			return newItems; 
		})
	}
	return addInCart
}


export default useAddInCart