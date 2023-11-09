import './FoodMenu.css'
import FoodCard from '../Components/FoodCard'
import { data } from '../data/testdata'



const FoodMenu = () => {

	const dishes = [...data]
	console.log(dishes);

	return(


		<div className='food-menu'> 
			<h1>MENY</h1>
			<ul>
			{ dishes.map(dish =>(<FoodCard key = {dish.name} dish = {dish} />) ) } 
			</ul>

			<h1>BARNMENY</h1>
			{/* <article className="card-container menu-card">
			<div className='arrow-down'><IoIosArrowDown/></div>
			<img src="" alt="" />
			<h3>Bliss orginal</h3>
			<p className='description'>A timeless favorite with beef patty, lettuce, tomato, onion, and pickles.</p>
			<p className='price'>6.99</p>
			<button><BiCartAdd/></button>
			</article> */}
			<h1>DRYCKER</h1>
			<h1>TILLBEHÖR</h1>
		</div>
	)

}

export default FoodMenu