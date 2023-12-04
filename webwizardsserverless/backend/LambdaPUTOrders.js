import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb"

const client = new DynamoDBClient({})
const dynamo = DynamoDBDocumentClient.from(client)

export const handler = async (event) => {
    try {
        const tableName = "orderTable"
        const requestJSON = JSON.parse(event.body)

        const items = requestJSON.items || []
        const orderContent = items[0]?.orderContent || []

        // Validate orderContent fields
        const sanitizedOrderContent = orderContent.map((item) => {
            return {
                amount: Number(item?.amount) || 0,
                amountTotal: Number(item?.amountTotal) || 0,
                description: sanitizeText(item?.description),
                image: sanitizeText(item?.image),
                message: sanitizeText(item?.message),
                name: sanitizeText(item?.name),
                price: Number(item?.price) || 0,
                priceTotal: Number(item?.priceTotal) || 0,
                StaffMessage: Number(item?.StaffMessage) || 0,
                id: sanitizeText(item?.id),
            }
        })

        // Validate costumerInfo fields
        const costumerInfo = orderContent[1] || {}
        const sanitizedCostumerInfo = {
            familyname: sanitizeText(costumerInfo?.familyname),
            firstname: sanitizeText(costumerInfo?.firstname),
            id: sanitizeText(costumerInfo?.id),
            phone: Number(costumerInfo?.phone) || 0,
            email: sanitizeText(costumerInfo?.email),
        }

        const { Items } = await dynamo.send(
            new PutCommand({
                TableName: tableName,
                Item: {
                    pk: "orders",
                    ordersId: sanitizeText(items[0]?.ordersId) || "",
                    orderContent: sanitizedOrderContent,
                    costumerInfo: sanitizedCostumerInfo,
                },
            })
        )

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: Items }),
        }
    } catch (err) {
        console.error("Error in Lambda function:", err)

        return {
            statusCode: err.statusCode || 500,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                message: err.message || "Internal Server Error",
                errorDetails: err,
            }),
        }
    }
}

function sanitizeText(text) {
    const sanitizedText = text ? text.replace(/[^a-zA-Z0-9åäö.\-]/g, "") : ""
    return sanitizedText
}