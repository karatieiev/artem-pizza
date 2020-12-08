import React from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import PropTypes from "prop-types"
import { usePizzaContext } from "../sharedComponents/PizzaContext"
import { getProcessingSystem } from "./getProcessingSystem"
import { postOrder } from "../api/orders"
import { Preview } from "./Preview"

export const Checkout = ({ formSubmit }) => {
  const { pizza } = usePizzaContext()
  const history = useHistory()
  const { register, watch, handleSubmit } = useForm({
    defaultValues: {
      card: "",
    },
  })

  const formData = watch()

  const onSubmit = (data) => {
    if (formSubmit) {
      formSubmit(data)
    }
    postOrder({
      ingredients: pizza,
      address: data.address,
      name: data.name,
      card_number: data.card,
    }).then(() => {
      history.push("/order")
    })
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

  return (
    <>
      <h3>Оформление заказа</h3>
      <Preview />
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
        <span>{` ${getProcessingSystem(formData.card.substring(0, 19))}`}</span>
        <br />
        <br />
        <button type="submit">{`Оплатить ${pizza.reduce(
          (sum, current) => sum + +current.price,
          0
        )} р`}</button>
      </form>
    </>
  )
}

Checkout.propTypes = {
  formSubmit: PropTypes.func,
}

Checkout.defaultProps = {
  formSubmit: null,
}
