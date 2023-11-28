import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    const tableName = "MenuTable";
    const requestJSON = JSON.parse(event.body);

    try {
        const { Items } = await dynamo.send(
            new PutCommand({
                TableName: tableName,
                Item: {
                    image: requestJSON.image,
                    sk: requestJSON.sk,
                    price: Number(requestJSON.price),
                    description: requestJSON.description,
                    pk: "menu",
                    id: requestJSON.id,
                    name: requestJSON.name,
                },
            })
        );

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: Items }),
            message: JSON.stringify({ message: "MenuItem successfully changed" }),
        };
    } catch (err) {
        return {
            statusCode: err.statusCode || 500,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: err.message || "Internal Server Error" }),
        };
    }
};
