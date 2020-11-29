import React from "react"
import { useHistory } from "react-router-dom"
import { usePizzaContext } from "../sharedComponents/PizzaContext"
import { Preview } from "./Preview"

export const Checkout = () => {
  const { pizza } = usePizzaContext()
  const history = useHistory()

  const handleFormSubmit = (event) => {
    event.preventDefault()
    history.push("/order")
  }

  return (
    <>
      <h3>Оформление заказа</h3>
      <Preview pizza={pizza} />
      <br />
      <form onSubmit={handleFormSubmit}>
        <button type="submit">{`Оплатить ${pizza.price} р`}</button>
      </form>
    </>
  )
}
