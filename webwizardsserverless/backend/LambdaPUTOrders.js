/* import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb"

const client = new DynamoDBClient({})
const dynamo = DynamoDBDocumentClient.from(client)

export const handler = async (event) => {
	const tableName = "orderTable"
	const requestJSON = JSON.parse(event.body)

	try {
		const { Items } = await dynamo.send(
			new PutCommand({
				TableName: tableName,
				Item: {
					pk: "orders",
                    sk: requestJSON.sk,
					ordersId: requestJSON.items[0].ordersId,
					orderLocked: false,
					orderReady: false,
					orderContent: {
						cartItems: [
							{
                                amount: Number(
                                    requestJSON.items[0].orderContent[0].amount
                                ),                              
                                amountTotal: Number(
                                    requestJSON.items[0].orderContent[0].amountTotal
                                ),
                                description: requestJSON.items[0].orderContent[0].description,
                                image: requestJSON.items[0].orderContent[0].image,
                                message: requestJSON.items[0].orderContent[0].message,

								name: requestJSON.items[0].orderContent[0].name,
								price: Number(
									requestJSON.items[0].orderContent[0].price
								),
                                priceTotal: Number(
									requestJSON.items[0].orderContent[0].priceTotal
								),
                                staffMessage: requestJSON.items[0].orderContent[0].staffMessage,

							},
						],
					},
					costumerInfo: {
						familyName:
							requestJSON.items[0].orderContent[1].familyname,
						firstName:
							requestJSON.items[0].orderContent[1].firstname,
						phone: (
							requestJSON.items[0].orderContent[1].phone
						),
						email: requestJSON.items[0].orderContent[1].email,
					},
				},
			})
		)

		return {
			statusCode: 200,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ items: Items }),
		}
	} catch (err) {
		return {
			statusCode: err.statusCode || 500,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				message: err.message || "Internal Server Error",
			}),
		}
	}
} */

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  const tableName = "orderTable";
  const requestBody = JSON.parse(event.body);
console.log("requestBody", requestBody);
  try {
    if (!requestBody.items || requestBody.items.length === 0 || !requestBody.items[0].ordersId) {
        throw new Error("Invalid request body. 'ordersId' is missing or 'items' array is empty.");
      }

    const updateParams = {
      TableName: tableName,
      Key: {
        pk: "orders",
        ordersId: requestBody.items[0].ordersId,
      },
      UpdateExpression: "SET orderContent = :orderContent, orderLocked = :orderLocked, orderReady = :orderReady, costumerInfo = :costumerInfo",
      ExpressionAttributeValues: {
        ":orderContent": requestBody.items[0].orderContent,
        ":orderLocked": requestBody.items[0].orderLocked,
        ":orderReady": requestBody.items[0].orderReady,
        ":costumerInfo": requestBody.items[0].costumerInfo
      },
      ReturnValues: "ALL_NEW", // Optional, returns updated item
    };

    console.log("Updating item with parameters:", updateParams);

    const updatedItem = await dynamo.send(new UpdateCommand(updateParams));

    console.log("Updated item:", updatedItem);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Data updated successfully" }),
    };
  } catch (err) {
    console.error("Error updating item:", err);

    return {
      statusCode: err.statusCode || 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: err.message }),
    };
  }
};
