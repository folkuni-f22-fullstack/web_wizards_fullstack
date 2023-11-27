const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocument} = require("@aws-sdk/lib-dynamodb")

const client = new DynamoDBClient({})
const db = DynamoDBDocument.from(client)

module.exports.handler = async () => {
	const tableName = "UserTable"
	try {
		const { Items } = await db.query({
			TableName: tableName,
			// IndexName: "sk",
			KeyConditionExpression: "pk = :pk",
			ExpressionAttributeValues: {
				":pk": "users",
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
