import React from "react"
import { usePizzaContext } from "../sharedComponents/PizzaContext"

export const Preview = () => {
  const { pizza } = usePizzaContext()
  const size = pizza.filter((item) => item.category === "size")
  const dough = pizza.filter((item) => item.category === "dough")
  const sauce = pizza.filter((item) => item.category === "sauce")
  const cheese = pizza.filter((item) => item.category === "cheese")
  const veggies = pizza.filter((item) => item.category === "veggies")
  const meat = pizza.filter((item) => item.category === "meat")

  return (
    <>
      <div>Описание заказа</div>
      {size[0] && <div>Размер: *{size.map((item) => `${item.name}*`)}</div>}
      {dough[0] && <div>Тесто: *{dough.map((item) => `${item.name}*`)}</div>}
      {sauce[0] && <div>Соус: *{sauce.map((item) => `${item.name}*`)}</div>}
      {cheese[0] && <div>Сыр: *{cheese.map((item) => `${item.name}*`)}</div>}
      {veggies[0] && (
        <div>Овощи: *{veggies.map((item) => `${item.name}*`)}</div>
      )}
      {meat[0] && <div>Мясо: *{meat.map((item) => `${item.name}*`)}</div>}
      <div>
        Сумма заказа: {pizza.reduce((sum, current) => sum + +current.price, 0)}р
      </div>
    </>
  )
}
