import React from "react"
import { usePizzaContext } from "../sharedComponents/PizzaContext"

export const Preview = () => {
  const { pizza } = usePizzaContext()
  return (
    <>
      <div>Описание заказа</div>
      <div>{pizza.description}</div>
      <div>Сумма заказа: {pizza.price}р</div>
    </>
  )
}
