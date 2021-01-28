import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import closeIcon from "../assets/close.svg"
import doneIcon from "../assets/done.svg"
import { OrderPreview } from "../sharedComponents/OrderPreview"
import {
  orderDescription,
  orderName,
  orderPrice,
} from "../store/order/selectors"
import styles from "./Order.module.scss"

export const Order = () => {
  const history = useHistory()
  const name = useSelector(orderName)
  const description = useSelector(orderDescription)
  const price = useSelector(orderPrice)
  const handleImgClick = () => {
    history.push("/")
  }
  return (
    <>
      <div className={styles.closeIcon}>
        <img
          src={closeIcon}
          role="presentation"
          alt=""
          onClick={handleImgClick}
        />
      </div>
      <div className={styles.doneIcon}>
        <img src={doneIcon} alt="" />
      </div>
      <div className={styles.title}>Спасибо за заказ!</div>
      <div className={styles.message}>
        Заказ успешно оплачен, ждите вашу пиццу уже через час
      </div>
      <div className={styles.preview}>
        <OrderPreview
          orderNumber="2390"
          orderDate="21 октября 2020 13:40"
          pizzaName={name}
          pizzaDescription={description}
          price={price}
          delivering="1"
        />
      </div>
    </>
  )
}
