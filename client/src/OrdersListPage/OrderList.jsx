import React from "react"
import { useQuery } from "react-query"
import { getOrders } from "../api/orders"
import styles from "./OrderList.module.scss"
import backward from "../assets/icn_arrow-left.svg"
import { OrderPreview } from "../sharedComponents/OrderPreview"

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
      <div className={styles.header}>
        <img src={backward} alt="" />
        <span>Список заказов</span>
      </div>
      {data.map((item) => (
        <div key={item.id} className={styles.card}>
          <OrderPreview
            orderNumber={item.id}
            orderDate={item.ingredients[3]}
            pizzaName={item.ingredients[0]}
            pizzaDescription={item.ingredients[1]}
            price={item.ingredients[2]}
            delivering={false}
          />
        </div>
      ))}
    </>
  )
}
