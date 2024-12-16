import { http, HttpResponse } from "msw";
import { GetOrderDetailsParams, GetOrderDetailsResponse } from "../get-order-details"

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '17912345678',
    },
    createdAt: new Date().toISOString(),
    status: "pending",
    totalInCents: 4000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        quantity: 2,
        product: { name: 'Pepperoni' }
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        quantity: 1,
        product: { name: 'Presunto' }
      }
    ]
  })
})