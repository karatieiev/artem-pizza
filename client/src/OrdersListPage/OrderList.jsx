import React from "react"
import { useQuery } from "react-query"
import { getOrders } from "../api/orders"

export const OrderList = () => {
  const { isLoading, isError, error, data } = useQuery("order", getOrders)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <h3>Список заказов</h3>
      {data.map((item) =>
        item.name !== undefined ? (
          <>
            <p>Заказ:</p>
            <div>Имя: {item.name}</div>
            <div>Адрес: {item.address}</div>
            <hr />
          </>
        ) : null
      )}
    </>
  )
}
