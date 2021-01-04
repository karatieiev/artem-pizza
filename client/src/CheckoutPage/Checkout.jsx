import React from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  orderDescription,
  orderError,
  orderName,
  orderPending,
  orderPosted,
  orderPrice,
} from "../store/order/selectors"

import { postOrderToServer } from "../store/order/actions"

export const Checkout = () => {
  const history = useHistory()
  const price = useSelector(orderPrice)
  const { register, handleSubmit } = useForm({
    defaultValues: {
      card: "",
    },
  })
  const dispatch = useDispatch()
  const orderPostedToServer = useSelector(orderPosted)
  const error = useSelector(orderError)
  const pending = useSelector(orderPending)
  const pizzaName = useSelector(orderName)
  const pizzaDescription = useSelector(orderDescription)
  const pizzaPrice = useSelector(orderPrice)

  const onSubmit = (data) => {
    dispatch(
      postOrderToServer({
        address: data.address,
        name: data.name,
        card_number: data.card,
        ingredients: [pizzaName, pizzaDescription, pizzaPrice],
      })
    )
  }

  const normalizeCardNumber = (value) => {
    return (
      value
        .replace(/\s/g, "")
        .match(/\d{1,4}/g)
        ?.join(" ")
        .substring(0, 19) || ""
    )
  }

  const handleChange = (event) => {
    const evnt = event
    const { value } = event.target
    evnt.target.value = normalizeCardNumber(value)
  }

  if (orderPostedToServer) {
    history.push("/order")
  }

  if (pending) {
    return <div>Posting...</div>
  }

  if (error) {
    return <div>Something went wrong... {error}</div>
  }

  return (
    <>
      <h3>Оформление заказа</h3>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Имя: <input id="name" type="text" name="name" ref={register} />
        </label>
        <br />
        <label htmlFor="address">
          Адрес:{" "}
          <input id="address" type="text" name="address" ref={register} />
        </label>
        <br />
        <label htmlFor="card">
          Номер карты:{" "}
          <input
            id="card"
            name="card"
            type="text"
            ref={register}
            placeholder="0000 0000 0000 0000"
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <br />
        <button type="submit">{`Оплатить ${price} р`}</button>
      </form>
    </>
  )
}
