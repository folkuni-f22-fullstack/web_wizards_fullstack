import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import {
	DynamoDBDocumentClient,
	ScanCommand,
	PutCommand,
	GetCommand,
	DeleteCommand,
} from "@aws-sdk/lib-dynamodb"

const client = new DynamoDBClient({})

const dynamo = DynamoDBDocumentClient.from(client)

const tableName = "MenuTable"

export const handler = async (event, context) => {
	let body
	let statusCode = 200
	const headers = {
		"Content-Type": "application/json",
	}

	try {
		switch (event.routeKey) {
			case "GET /webwizards/menu/items/{id}":
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
			case "GET /webwizards/menu/items":
				body = await dynamo.send(
					new ScanCommand({ TableName: tableName })
				)
				body = body.Items
				break
			// case "PUT /webwizards/menu/items":
			// 	let requestJSON = JSON.parse(event.body)
			// 	await dynamo.send(
			// 		new PutCommand({
			// 			TableName: tableName,
			// 			Item: {
			// 				id: requestJSON.id,
			// 				price: requestJSON.price,
			// 				name: requestJSON.name,
			// 			},
			// 		})
			// 	)
			// 	body = `Put item ${requestJSON.id}`
			// 	break
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
