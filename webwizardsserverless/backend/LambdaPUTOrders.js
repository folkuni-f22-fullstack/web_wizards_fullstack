import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  const tableName = "orderTable";
  const requestBody = JSON.parse(event.body);
  console.log("requestBody", requestBody);

  try {
    if (
      !requestBody.items ||
      requestBody.items.length === 0 ||
      !requestBody.items[0].ordersId
    ) {
      throw new Error(
        "Invalid request body. 'ordersId' is missing or 'items' array is empty."
      );
    }

    const updateParams = {
      TableName: tableName,
      Key: {
        pk: "orders",
        ordersId: requestBody.items[0].ordersId,
      },
      UpdateExpression:
        "SET orderContent = :orderContent, orderLocked = :orderLocked, costumerInfo = :costumerInfo",
      ExpressionAttributeValues: {
        ":orderContent": requestBody.items[0].orderContent,
        ":orderLocked": requestBody.items[0].orderLocked,
        ":costumerInfo": requestBody.items[0].costumerInfo,
      },
      ReturnValues: "ALL_NEW", // Optional, returns updated item
    };

    // Check if orderReady is defined before adding it to ExpressionAttributeValues
    if (requestBody.items[0].orderReady !== undefined) {
      updateParams.UpdateExpression += ", orderReady = :orderReady";
      updateParams.ExpressionAttributeValues[":orderReady"] =
        requestBody.items[0].orderReady;
    }

    // Remove undefined values from ExpressionAttributeValues
    Object.keys(updateParams.ExpressionAttributeValues).forEach((key) => {
      if (updateParams.ExpressionAttributeValues[key] === undefined) {
        delete updateParams.ExpressionAttributeValues[key];
      }
    });

    console.log("Updating item with parameters:", updateParams);
    console.log("costumerInfo value:", requestBody.items[0].costumerInfo);

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
