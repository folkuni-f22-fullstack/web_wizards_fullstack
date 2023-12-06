import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb"
import { nanoid } from "nanoid"

const client = new DynamoDBClient({})
const dynamo = DynamoDBDocumentClient.from(client)

export const handler = async (event) => {
    const tableName = "orderTable"

    const requestBody = JSON.parse(event.body)

    try {
        if (!requestBody.items || requestBody.items.length === 0) {
            throw new Error(
                "Invalid request body. 'items' array is missing or empty."
            )
        }
        const ordersId = nanoid()

        const newItem = {
            pk: "orders",
            ordersId: ordersId,
            orderContent: requestBody.items[0].orderContent,
            costumerInfo: requestBody.items[0].costumerInfo,
            orderLocked: requestBody.items[0].orderLocked,
            orderReady: requestBody.items[0].orderReady
        }

        console.log(newItem, "newItem")

        await dynamo.send(
            new PutCommand({
                TableName: tableName,
                Item: newItem,
            })
        )

        console.log("after PutCommand")

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "Data inserted successfully", orderId: ordersId }),
          };
    } catch (err) {
        return {
            statusCode: err.statusCode,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: err.message }),
        }
    }
}