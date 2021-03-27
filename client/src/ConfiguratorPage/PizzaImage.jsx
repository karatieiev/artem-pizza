import React from "react"
import { useSelector } from "react-redux"
import { orderImages } from "../store/order/selectors"
import styles from "./PizzaImage.module.scss"

export const PizzaImage = () => {
  const images = useSelector(orderImages)

  if (!images.length) {
    return null
  }

  return (
    <div className={styles.container}>
      {images.map((item) => (
        <img
          key={item.id}
          src={`${process.env.REACT_APP_API_SERVER}/${item.image}`}
          alt=""
        />
      ))}
    </div>
  )
}
