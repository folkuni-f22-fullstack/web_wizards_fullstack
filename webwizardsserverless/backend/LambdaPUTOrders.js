import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
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
					ordersId: requestJSON.items[0].ordersId,
					orderContent: [
						{
							amount: Number(
								requestJSON.items[0].orderContent[0].amount
							),
							amountTotal: Number(
								requestJSON.items[0].orderContent[0].amountTotal
							),
							description:
								requestJSON.items[0].orderContent[0]
									.description,
							image: requestJSON.items[0].orderContent[0].image,
							message:
								requestJSON.items[0].orderContent[0].message,
							name: requestJSON.items[0].orderContent[0].name,
							price: Number(
								requestJSON.items[0].orderContent[0].price
							),
							priceTotal: Number(
								requestJSON.items[0].orderContent[0].priceTotal
							),
							StaffMessage: Number(
								requestJSON.items[0].orderContent[0]
									.StaffMessage
							),
							id: requestJSON.items[0].orderContent[0].id,
						},
						{
							familyname:
								requestJSON.items[0].orderContent[1].familyname,
							firstname:
								requestJSON.items[0].orderContent[1].firstname,
							id: requestJSON.items[0].orderContent[1].id,
							phone: Number(
								requestJSON.items[0].orderContent[1].phone
							),
							email: requestJSON.items[0].orderContent[1].email,
						},
					],
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
}
