

export async function postOrder(cartItems, userInput) {
	try {
		const response = await fetch(
		'https://omw2d3h4o6.execute-api.eu-north-1.amazonaws.com/webwizards/orders', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"items": [ {
					"orderContent": {
						cartItems,
						"costumerInfo": userInput,
						"orderLocked": false,
						"orderReady": false
						
					} 
				}
				]
			}),
			
		});
		
		if (!response.ok){
			throw new Error('Failed to post new order');
		}
			const data = await response.json();
			console.log(data);
			return data 
		
} catch(error) {
		console.error('Error posting data:', error.message);
	}
}