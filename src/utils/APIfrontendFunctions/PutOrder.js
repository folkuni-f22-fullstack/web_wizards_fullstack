export async function putOrder(updatedOrder, orderId) {
	try {
		const response = await fetch(
			`https://omw2d3h4o6.execute-api.eu-north-1.amazonaws.com/webwizards/orders/${orderId}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedOrder),
			}
		)

		if (response.ok) {
			console.log("Order updated successfully")
		} else {
			console.error("Failed to update order")
		}
	} catch (error) {
		console.error("Error updating order:", error)
	}
}
