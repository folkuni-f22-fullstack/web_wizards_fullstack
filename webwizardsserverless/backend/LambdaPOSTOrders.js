import { DynamoDB } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"

const client = new DynamoDB({})
const db = DynamoDBDocument.from(client)

module.exports.handler = async () => {
	const tableName = "OrderTable"
	try {
		const { Items } = await db.query({
			TableName: tableName,
			// IndexName: "sk",
			KeyConditionExpression: "pk = :pk",
			ExpressionAttributeValues: {
				":pk": "orders",
			},
		})

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
