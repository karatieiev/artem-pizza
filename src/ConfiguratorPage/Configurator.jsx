import React from "react"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { makePizza } from "./makePizza"
import { calculatePrice } from "./calculatePrice"
import { usePizzaContext } from "../sharedComponents/PizzaContext"
import { InputGroup } from "./InputGroup"

const menu = [
  { id: 0, option: "size", name: "30см", price: 200 },
  { id: 1, option: "size", name: "35см", price: 250 },
  { id: 2, option: "dough", name: "тонкое", price: 0 },
  { id: 3, option: "dough", name: "пышное", price: 0 },
  { id: 4, option: "sauce", name: "томатный", price: 0 },
  { id: 5, option: "sauce", name: "белый", price: 0 },
  { id: 6, option: "sauce", name: "острый", price: 0 },
  { id: 7, option: "cheese", name: "моцарелла", price: 29 },
  { id: 8, option: "cheese", name: "чеддер", price: 29 },
  { id: 9, option: "cheese", name: "дор блю", price: 29 },
  { id: 10, option: "vegies", name: "помидоры", price: 29 },
  { id: 11, option: "vegies", name: "грибы", price: 29 },
  { id: 12, option: "vegies", name: "перец", price: 29 },
  { id: 13, option: "meat", name: "бекон", price: 29 },
  { id: 14, option: "meat", name: "пепперони", price: 29 },
  { id: 15, option: "meat", name: "ветчина", price: 29 },
]

export const Configurator = () => {
  const { setPizza } = usePizzaContext()
  const history = useHistory()
  const { register, watch } = useForm({
    defaultValues: {
      size: "0",
      dough: "2",
      sauce: "4",
      cheese: [],
      vegies: [],
      meat: [],
    },
  })

  const selection = watch()

  const handleSubmitForm = (event) => {
    event.preventDefault()
    setPizza(makePizza(menu, selection))
    history.push("/checkout")
  }

  return (
    <>
      <h3>Соберите пиццу</h3>
      <form onSubmit={handleSubmitForm}>
        <InputGroup
          type="radio"
          caption="Размер"
          menu={menu.filter((item) => item.option === "size")}
          option="size"
          register={register}
        />
        <InputGroup
          type="radio"
          caption="Тесто"
          menu={menu.filter((item) => item.option === "dough")}
          option="dough"
          register={register}
        />
        <InputGroup
          type="radio"
          caption="Соус"
          menu={menu.filter((item) => item.option === "sauce")}
          option="sauce"
          register={register}
        />
        <InputGroup
          type="checkbox"
          caption="Сыр"
          menu={menu.filter((item) => item.option === "cheese")}
          option="cheese"
          register={register}
        />
        <InputGroup
          type="checkbox"
          caption="Овощи"
          menu={menu.filter((item) => item.option === "vegies")}
          option="vegies"
          register={register}
        />
        <InputGroup
          type="checkbox"
          caption="Мясо"
          menu={menu.filter((item) => item.option === "meat")}
          option="meat"
          register={register}
        />
        <br />
        <br />
        <button type="submit">{`Заказать ${calculatePrice(
          menu,
          selection
        )}р`}</button>
      </form>
    </>
  )
}
