import {IoIosArrowDown} from 'react-icons/io'
import { BiCartAdd } from 'react-icons/bi'
import useCart from './addToCart'


const FoodCard = (props) => {
	const { dish } = props
	const {cart, addToCart} = useCart()
	
	return(
		<li className="card-container menu-card">
			<div className='arrow-down'><IoIosArrowDown/></div>
			<img src={dish.image} alt="" />
			<h3>{dish.name}</h3>
			<p className='description'>{dish.description}</p>
			<p className='price'>{dish.price} :-</p>
			<button onClick={() => addToCart(dish)}><BiCartAdd/></button>
		</li >
	)
}


export default FoodCard