import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    const tableName = "orderTable";
    const requestJSON = JSON.parse(event.body);

    try {
        const { Items } = await dynamo.send(
            new PutCommand({
                TableName: tableName,
                Item: {
                    pk: "orders",
                    ordersId: requestJSON.items[0].ordersId,
                    orderContent: [
                        {
                            name: requestJSON.items[0].orderContent[0].name,
                            description: requestJSON.items[0].orderContent[0].description,
                            amount: Number(requestJSON.items[0].orderContent[0].amount),
                            id: requestJSON.items[0].orderContent[0].id,
                            message: requestJSON.items[0].orderContent[0].message,
                            price: Number(requestJSON.items[0].orderContent[0].price),
                        },
                        {
                            familyname: requestJSON.items[0].orderContent[1].familyname,
                            firstname: requestJSON.items[0].orderContent[1].firstname,
                            id: requestJSON.items[0].orderContent[1].id,
                            phone: Number(requestJSON.items[0].orderContent[1].phone),
                            email: requestJSON.items[0].orderContent[1].email,
                        },
                    ],
                },
            })
        );

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: Items }),
        };
    } catch (err) {
        return {
            statusCode: err.statusCode || 500,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: err.message || "Internal Server Error" }),
        };
    }
};
