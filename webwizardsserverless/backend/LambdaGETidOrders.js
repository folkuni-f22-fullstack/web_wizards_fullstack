const { DynamoDBClient } = require("@aws-sdk/client-dynamodb")
const { DynamoDBDocumentClient, GetCommand } = require("@aws-sdk/lib-dynamodb")

const client = new DynamoDBClient({})

const dynamo = DynamoDBDocumentClient.from(client)

const tableName = "OrdersTable"

export const handler = async (event) => {
	let body
	let statusCode = 200
	const headers = {
		"Content-Type": "application/json",
	}

	try {
		switch (event.routeKey) {
			case "GET /webwizards/orders/items/{ordersId}":
				body = await dynamo.send(
					new GetCommand({
						TableName: tableName,
						Key: {
							id: event.pathParameters.id,
						},
					})
				)
				body = body.Item
				break
			default:
				throw new Error(`Unsupported route: "${event.routeKey}"`)
		}
	} catch (err) {
		statusCode = 400
		body = err.message
	} finally {
		body = JSON.stringify(body)
	}

	return {
		statusCode,
		body,
		headers,
	}
}
