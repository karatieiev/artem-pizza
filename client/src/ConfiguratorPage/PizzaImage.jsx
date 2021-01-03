import React from "react"
import { shallowEqual, useSelector } from "react-redux"
import {
  orderCheese,
  orderDough,
  orderMeat,
  orderVeggies,
} from "../store/order/selectors"
import styles from "./PizzaImage.module.scss"

const useShallowEqualSelector = (selector) =>
  useSelector(selector, shallowEqual)

export const PizzaImage = () => {
  const dough = useShallowEqualSelector(orderDough)
  const cheese = useShallowEqualSelector(orderCheese)
  const meat = useShallowEqualSelector(orderMeat)
  const veggies = useShallowEqualSelector(orderVeggies)

  if (!dough.length) {
    return null
  }

  return (
    <div className={styles.container}>
      <img
        src={`${process.env.REACT_APP_API_SERVER}/${dough[0].image}`}
        alt=""
      />
      {cheese.map((item) => (
        <img
          key={item.id}
          src={`${process.env.REACT_APP_API_SERVER}/${item.image}`}
          alt=""
        />
      ))}
      {meat.map((item) => (
        <img
          key={item.id}
          src={`${process.env.REACT_APP_API_SERVER}/${item.image}`}
          alt=""
        />
      ))}
      {veggies.map((item) => (
        <img
          key={item.id}
          src={`${process.env.REACT_APP_API_SERVER}/${item.image}`}
          alt=""
        />
      ))}
    </div>
  )
}
