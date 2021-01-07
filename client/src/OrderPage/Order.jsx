import React from "react"
import styles from "./Order.module.scss"
import closeIcon from "../assets/close.png"
import doneIcon from "../assets/done.ico"

export const Order = () => {
  return (
    <>
      <div className={styles.closeIcon}>
        <img src={closeIcon} alt="" />
      </div>
      <div className={styles.doneIcon}>
        <img src={doneIcon} alt="" />
      </div>
      <div className={styles.title}>Спасибо за заказ!</div>
      <div className={styles.message}>
        Заказ успешно оплачен, ждите вашу пиццу уже через час
      </div>
    </>
  )
}
