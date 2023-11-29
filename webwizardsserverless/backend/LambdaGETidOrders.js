import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "orderTable";

export const handler = async (event) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const ordersId = event.pathParameters.ordersId.toString();

    // Retrieve the item based on ordersId
    const getItemResponse = await dynamo.send(
      new GetCommand({
        TableName: tableName,
        Key: {
          "pk": "orders",
          "ordersId": ordersId,
        },
      })
    );

    console.log("getItemResponse:", getItemResponse);

    if (!getItemResponse.Item) {
      // Item not found
      statusCode = 404;
      body = JSON.stringify({ message: `Order with id ${ordersId} not found` });
    } else {
      // Item found, return it
      body = JSON.stringify({ order: getItemResponse.Item });
    }
  } catch (error) {
    statusCode = 500;
    body = JSON.stringify({ message: error.message || "Internal Server Error" });
    console.error("Error:", error);
  } finally {
    console.log("Response:", { statusCode, body, headers });
  }

  return {
    statusCode,
    body,
    headers,
  };
};
