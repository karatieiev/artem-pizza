import React from "react"
import PropTypes from "prop-types"
import styles from "./OrderPreview.module.scss"
import repeatIcon from "../assets/repeat.svg"
import deliveringIcon from "../assets/icn_delivery.svg"

export const OrderPreview = ({
  orderNumber,
  orderDate,
  pizzaName,
  pizzaDescription,
  price,
  delivering,
}) => {
  const icon = delivering ? deliveringIcon : repeatIcon
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>Заказ {orderNumber}</div>
        <div className={styles.date}>{orderDate}</div>
      </div>
      <div className={styles.title}>{pizzaName}</div>
      <div className={styles.description}>{pizzaDescription}</div>
      <div className={styles.footer}>
        <div>{`${price} руб`}</div>
        <div className={styles.status}>
          <img src={icon} alt="" />
          <div className={delivering ? styles.delivering : styles.repeat}>
            {delivering ? "Доставляется" : "Повторить заказ"}
          </div>
        </div>
      </div>
    </div>
  )
}

OrderPreview.propTypes = {
  orderNumber: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  pizzaName: PropTypes.string.isRequired,
  pizzaDescription: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  delivering: PropTypes.bool.isRequired,
}
