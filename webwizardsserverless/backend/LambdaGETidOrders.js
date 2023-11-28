import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

export const handler = async () => {
    const tableName = "orderTable";
    const partitionKey = "orders"; // pk value
    // const sortKey = dynamically provide or calculate the value based on your logic

    try {
        const { Items } = await dynamo.send(
            new QueryCommand({
                TableName: tableName,
                KeyConditionExpression: "pk = :pk",
                ExpressionAttributeValues: {
                    ":pk": partitionKey,
                },
            })
        );

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
