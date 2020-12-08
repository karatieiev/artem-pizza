import React from "react"
import { useQuery } from "react-query"
import { getOrders } from "../api/orders"

export const OrderList = () => {
  const { isLoading, isError, error, data } = useQuery("orders", getOrders)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  console.log(JSON.stringify(data))

  return (
    <>
      <h3>Список заказов</h3>
      {data.map((item) =>
        item.name !== undefined ? (
          <>
            <p>Заказ:</p>
            {item.ingredients.map((i) => (i ? ` ${i.name}` : null))}
            <div>Имя: {item.name}</div>
            <div>Адрес: {item.address}</div>
            <hr />
          </>
        ) : null
      )}
    </>
  )
}
