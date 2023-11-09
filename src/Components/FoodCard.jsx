import {IoIosArrowDown} from 'react-icons/io'
import { BiCartAdd } from 'react-icons/bi'


const FoodCard = (props) => {
	const { dish } = props
	return(
		<li className="card-container menu-card">
		<div className='arrow-down'><IoIosArrowDown/></div>
		<img src="" alt="" />
		<h3>{dish.name}</h3>
		<p className='description'>{dish.description}</p>
		<p className='price'>{dish.price}</p>
		<button><BiCartAdd/></button>
		</li >
	)
}


export default FoodCard