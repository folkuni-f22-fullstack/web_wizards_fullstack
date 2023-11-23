import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import {
	DynamoDBDocumentClient,
	ScanCommand,
	GetCommand,
} from "@aws-sdk/lib-dynamodb"

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
							ordersId: event.pathParameters.ordersId,
						},
					})
				)
				body = body.Item
				break
			case "GET /webwizards/orders/items":
				body = await dynamo.send(
					new ScanCommand({ TableName: tableName })
				)
				body = body.Items
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
