const { DynamoDBClient, PutCommand } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocument} = require("@aws-sdk/lib-dynamodb")

const client = new DynamoDBClient({})
const db = DynamoDBDocument.from(client)

module.exports.handler = async (event) => {
    const tableName = "orderTable"

    const requestBody = JSON.parse(event.body)

    try {
        const newItem = {
            pk: requestBody.items[0].pk,
            sk: requestBody.items[0].sk,
            ordersId: requestBody.items[0].ordersId,
            orderContent: requestBody.items[0].orderContent,
        }

        await db.send(
            new PutCommand({
                TableName: tableName,
                Item: newItem,
            })
        )

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
