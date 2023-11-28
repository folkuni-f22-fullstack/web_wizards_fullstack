const { DynamoDBClient, PutCommand } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocument} = require("@aws-sdk/lib-dynamodb")

const { nanoid } = require("nanoid");

const client = new DynamoDBClient({})
const db = DynamoDBDocument.from(client)

module.exports.handler = async (event) => {
    const tableName = "orderTable"

    const requestBody = JSON.parse(event.body)

    try {

        const ordersId = nanoid();
        
        const newItem = {
            pk: "orders",
            sk: ordersId,
            ordersId: ordersId,
            orderContent: requestBody.items[0].orderContent,
        }

        console.log(newItem, "newItem");

        await db.send(
            new PutCommand({
                TableName: tableName,
                Item: newItem,
            })
        )

        console.log("after PutCommand");

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "Data inserted successfully" }),
        }
    } catch (err) {
        return {
            statusCode: err.statusCode,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: err.message }),
        }
    }
}


// const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
// const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");
// // const { nanoid } = require("nanoid");

// const client = new DynamoDBClient({});
// const dynamo = DynamoDBDocumentClient.from(client);

// const tableName = "orderTable";

// exports.handler = async (event) => {
//   let body;
//   let statusCode = 200;
//   const headers = {
//     "Content-Type": "application/json",
//   };

//   try {
//     // const ordersId = nanoid();

//     const requestData = JSON.parse(event.body);

//     // Djup kopiering för att undvika mutationer på ursprungliga objektet
//     const cleanedRequestData = JSON.parse(JSON.stringify(requestData));

//     // Skapa en PUTCommand för att lägga till post med nytt id
//     await dynamo.send(
//       new PutCommand({
//         TableName: tableName,
//         // Key: {
//         //     "pk": "orders",
//         //     "ordersId": ordersId,
//         // },
//         Item: {
//           ...cleanedRequestData,
//           ordersId: '35677',
//         },
//       }),
//       console.log(Item, "Item"),
//       console.log(ordersId, "ordersId")
//     );

//     body = `Added item ${ordersId}`;
//   } catch (error) {
//     statusCode = 500;
//     body = error.message;
//   } finally {
//     body = JSON.stringify(body);
//   }

//   return {
//     statusCode,
//     body,
//     headers,
//   };
// };