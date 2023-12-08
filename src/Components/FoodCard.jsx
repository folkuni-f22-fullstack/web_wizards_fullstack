// import {IoIosArrowDown} from 'react-icons/io'
import { BiCartAdd } from 'react-icons/bi'
import useCart from '../utils/addToCart'
import { useState } from 'react'




const FoodCard = (props) => {
	const { dish } = props
	const {cart, addToCart} = useCart()
	const [dishAdded, setDishAdded ] = useState(false) 
	
const addedMessage = () => {
	setDishAdded(true)
	setTimeout(() => {
		setDishAdded(false);
		        }, 1500);
}

	return(
		<li className="card-container menu-card">
			{/* <div className='arrow-down'><IoIosArrowDown/></div> */}
			<div className='menu-image-container'>
				<img src={dish.image} alt="" />
			</div>
			<h3>{dish.name}</h3>
			<p className='description'>{dish.description}</p>
			<div className={!dishAdded ? "hidden" : "added"}><p>Tillagd i varukorgen!</p></div>
			<p className='price'>{dish.price} :-</p>
			<button
			 onClick={() =>{ addToCart(dish), addedMessage()}}><BiCartAdd/></button>
		</li >
	)
}


export default FoodCard