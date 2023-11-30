import './FoodMenu.css'
import FoodCard from '../../utils/FoodCard'
import { useState, useEffect } from 'react'
import  getMenu  from '../../utils/APIfrontendFunctions/GetMenu.js'

const FoodMenu = () => {

 const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const menuData = await getMenu()
			setData(menuData.items)
		}
		fetchData()
	}, [])
	
	console.log('data',data);
	const allData = data ?  [...data] : []

	
	const dishes = allData.filter(dish => dish.sk.includes('burger'))
	const kidsDishes = allData.filter(dish => dish.sk.includes('kids'))
	const drinks = allData.filter(dish => dish.sk.includes('drinks'))
	const sides =allData.filter(dish => dish.sk.includes('sides'))
	// console.log('dishes', dishes);
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