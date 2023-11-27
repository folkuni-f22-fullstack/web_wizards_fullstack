const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocument} = require("@aws-sdk/lib-dynamodb")

const client = new DynamoDBClient({})
const db = DynamoDBDocument.from(client)

module.exports.handler = async (event) => {
	const tableName = "orderTable"
	const primaryKey = 'orders';
	const ordersId = event.queryStringParameters && event.queryStringParameters.ordersId;
	try {
		await db.delete({
			TableName: tableName,
			// IndexName: "sk",
			Key: {
				pk: primaryKey,
				ordersId: ordersId

			},
		});

		return {
			statusCode: 200,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ message: "success, item deleted" }),
		}
	} catch (err) {
		return {
			statusCode: err.statusCode,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ message: err.message }),
		}
	}
}
