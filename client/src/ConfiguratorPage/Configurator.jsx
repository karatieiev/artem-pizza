import React from "react"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { makePizza } from "./makePizza"
import { calculatePrice } from "./calculatePrice"
import { usePizzaContext } from "../sharedComponents/PizzaContext"
import { InputGroup } from "./InputGroup"

const ingredients = [
  { slug: "0", category: "size", name: "30см", price: 200 },
  { slug: "1", category: "size", name: "35см", price: 250 },
  { slug: "2", category: "dough", name: "тонкое", price: 0 },
  { slug: "3", category: "dough", name: "пышное", price: 0 },
  { slug: "4", category: "sauce", name: "томатный", price: 0 },
  { slug: "5", category: "sauce", name: "белый", price: 0 },
  { slug: "6", category: "sauce", name: "острый", price: 0 },
  { slug: "7", category: "cheese", name: "моцарелла", price: 29 },
  { slug: "8", category: "cheese", name: "чеддер", price: 29 },
  { slug: "9", category: "cheese", name: "дор блю", price: 29 },
  { slug: "10", category: "veggies", name: "помидоры", price: 29 },
  { slug: "11", category: "veggies", name: "грибы", price: 29 },
  { slug: "12", category: "veggies", name: "перец", price: 29 },
  { slug: "13", category: "meat", name: "бекон", price: 29 },
  { slug: "14", category: "meat", name: "пепперони", price: 29 },
  { slug: "15", category: "meat", name: "ветчина", price: 29 },
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
      veggies: [],
      meat: [],
    },
  })

  const selection = watch()

  const handleSubmitForm = (event) => {
    event.preventDefault()
    setPizza(makePizza(ingredients, selection))
    history.push("/checkout")
  }

  return (
    <>
      <h3>Соберите пиццу</h3>
      <form onSubmit={handleSubmitForm}>
        <InputGroup
          type="radio"
          caption="Размер"
          ingredients={ingredients.filter((item) => item.category === "size")}
          category="size"
          register={register}
        />
        <InputGroup
          type="radio"
          caption="Тесто"
          ingredients={ingredients.filter((item) => item.category === "dough")}
          category="dough"
          register={register}
        />
        <InputGroup
          type="radio"
          caption="Соус"
          ingredients={ingredients.filter((item) => item.category === "sauce")}
          category="sauce"
          register={register}
        />
        <InputGroup
          type="checkbox"
          caption="Сыр"
          ingredients={ingredients.filter((item) => item.category === "cheese")}
          category="cheese"
          register={register}
        />
        <InputGroup
          type="checkbox"
          caption="Овощи"
          ingredients={ingredients.filter(
            (item) => item.category === "veggies"
          )}
          category="vegies"
          register={register}
        />
        <InputGroup
          type="checkbox"
          caption="Мясо"
          ingredients={ingredients.filter((item) => item.category === "meat")}
          category="meat"
          register={register}
        />
        <br />
        <br />
        <button type="submit">{`Заказать ${calculatePrice(
          ingredients,
          selection
        )}р`}</button>
      </form>
    </>
  )
}
