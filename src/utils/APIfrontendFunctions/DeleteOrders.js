export async function deleteOrder(orderId) {
	try {
		const response = await fetch(
			`https://omw2d3h4o6.execute-api.eu-north-1.amazonaws.com/webwizards/orders/${orderId}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			}
		)

		if (response.ok) {
			console.log("Order deleted successfully")
		} else {
			console.error("Failed to delete order")
		}
	} catch (error) {
		console.error("Error when deleting order:", error)
	}
}

export default deleteOrder
