import React from "react"
import { useHistory } from "react-router-dom"
import { useQuery } from "react-query"
import { getOrders } from "../api/orders"
import { OrderPreview } from "../sharedComponents/OrderPreview"
import styles from "./OrderList.module.scss"
import backward from "../assets/icn_arrow-left.svg"

export const OrderList = () => {
  const { isLoading, isError, error, data } = useQuery("order", getOrders)
  const history = useHistory()

  const handleBackwardClick = () => {
    history.push("/")
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <img
          src={backward}
          alt=""
          role="presentation"
          onClick={handleBackwardClick}
        />
        <span>Мои заказы</span>
      </div>
      <div className={styles.container}>
        {data.map((item) => (
          <div className={styles.order} key={item.id}>
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
      </div>
    </div>
  )
}
