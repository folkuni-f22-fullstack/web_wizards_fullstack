import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient,PutCommand} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
	const tableName = "orderTable"
	let requestJSON = JSON.parse(event.body);
	try {
		const { Items } = await dynamo.send(
			new PutCommand({
			TableName: tableName,
			Item:{
				"items": [
		{
			"orderContent": [
				{
					"name": requestJSON.name,
					"description": requestJSON.description,
					"amount": Number.requestJSON.amount,
					"id": requestJSON.id,
					"message": requestJSON.message,
					"price": Number.requestJSON.price
				},
				{
					"familyname": requestJSON.familyname,
					"firstname": requestJSON.firstname,
					"id": requestJSON.id,
					"phone": requestJSON.phone,
					"email": requestJSON.email
				}
			],
			"pk": "orders",
			"ordersId": requestJSON.ordersId
			}
		]}
			// IndexName: "sk",
			// KeyConditionExpression: "pk = :pk",
			// ExpressionAttributeValues: {
			// 	":pk": "orders",
			// },
		})
		)

		return {
			statusCode: 200,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ items: Items }),
		}
	} catch (err) {
		return {
			statusCode: err.statusCode,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ message: err.message }),
		}
	}
}
