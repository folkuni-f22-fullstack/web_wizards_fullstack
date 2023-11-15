import './FoodMenu.css'
import FoodCard from '../../Components/FoodCard'
import { data, kidsData, drinksData, sidesData } from '../../data/testdata'




const FoodMenu = () => {

	const dishes = [...data]
	const kidsDishes = [...kidsData]
	const drinks = [...drinksData]
	const sides = [...sidesData]

	return(


		<div className='food-menu'> 
			<h1>MENY</h1>
			<ul>
			{ dishes.map(dish =>(<FoodCard key = {dish.name} dish = {dish} />) ) } 
			</ul>

			<h1>BARNMENY</h1>
			<ul>
			{ kidsDishes.map(dish =>(<FoodCard key = {dish.name} dish = {dish} />) ) } 
			</ul>

			<h1>DRYCKER</h1>
			<ul>
			{ drinks.map(dish =>(<FoodCard key = {dish.name} dish = {dish} />) ) } 
			</ul>
			<h1>TILLBEHÖR</h1>
			<ul>
			{ sides.map(dish =>(<FoodCard key = {dish.name} dish = {dish} />) ) } 
			</ul>
		</div>
	)

}

export default FoodMenu