const getOrdersId = async (ordersId) => {
	try {
		const response = await fetch(
			`https://omw2d3h4o6.execute-api.eu-north-1.amazonaws.com/webwizards/orders/${ordersId}`
		)

		if (!response.ok) {
			throw new Error("Failed to fetch data")
		}
		const data = await response.json()
		console.log('data:', data)
		return data
	} catch (error) {
		console.error("Error fetching data:", error.message)
	}
}
export default getOrdersId