const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, DeleteCommand, GetCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "orderTable";

exports.handler = async (event) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const ordersId = event.pathParameters.ordersId.toString();

    // Check if the item exists before attempting to delete
    const getItemResponse = await dynamo.send(
      new GetCommand({
        TableName: tableName,
        Key: {
          "pk": "orders", // Assuming "pk" is the primary key value you are using
          "ordersId": ordersId,
        },
      })
    );

    console.log("getItemResponse:", getItemResponse);

    if (!getItemResponse.Item) {
      // Item not found
      statusCode = 404;
      body = JSON.stringify({ message: "Item not found" });
    } else {
      console.log("Item exists, proceeding with deletion");

      // Item exists, proceed with deletion
      await dynamo.send(
        new DeleteCommand({
          TableName: tableName,
          Key: {
            "pk": "orders",
            "ordersId": ordersId,
          },
        })
      );

      body = `Deleted order with id: ${ordersId}`;
    }
  } catch (error) {
    statusCode = 500;
    body = error.message;
    console.error("Error:", error);
  } finally {
    console.log("Response:", { statusCode, body, headers });
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
