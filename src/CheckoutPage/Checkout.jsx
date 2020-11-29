import React from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { usePizzaContext } from "../sharedComponents/PizzaContext"
import { getProcessingSystem } from "./getProcessingSystem"
import { Preview } from "./Preview"

export const Checkout = () => {
  const { pizza } = usePizzaContext()
  const history = useHistory()
  const { register, watch } = useForm({
    defaultValues: {
      card: "",
    },
  })

  const formData = watch()

  const onSubmit = (event) => {
    event.preventDefault()
    history.push("/order")
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
      <form onSubmit={onSubmit}>
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
          {` ${getProcessingSystem(formData.card.substring(0, 19))}`}
        </label>
        <br />
        <br />
        <button type="submit">{`Оплатить ${pizza.reduce(
          (sum, current) => sum + current.price,
          0
        )} р`}</button>
      </form>
    </>
  )
}
