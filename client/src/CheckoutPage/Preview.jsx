import React from "react"
import { usePizzaContext } from "../sharedComponents/PizzaContext"

export const Preview = () => {
  const { pizza } = usePizzaContext()
  const size = pizza.filter((item) => item.option === "size")
  const dough = pizza.filter((item) => item.option === "dough")
  const sauce = pizza.filter((item) => item.option === "sauce")
  const cheese = pizza.filter((item) => item.option === "cheese")
  const vegies = pizza.filter((item) => item.option === "vegies")
  const meat = pizza.filter((item) => item.option === "meat")

  return (
    <>
      <div>Описание заказа</div>
      <div>Размер: {size[0]?.name}</div>
      <div>Тесто: {dough[0]?.name}</div>
      <div>Соус: {sauce[0]?.name}</div>
      {cheese[0] && (
        <div>
          Сыр:{" "}
          {cheese.map((item, index) => (index ? `, ${item.name}` : item.name))}
        </div>
      )}
      {vegies[0] && (
        <div>
          Овощи:{" "}
          {vegies.map((item, index) => (index ? `, ${item.name}` : item.name))}
        </div>
      )}
      {meat[0] && (
        <div>
          Мясо:{" "}
          {meat.map((item, index) => (index ? `, ${item.name}` : item.name))}
        </div>
      )}
      <div>
        Сумма заказа: {pizza.reduce((sum, current) => sum + current.price, 0)}р
      </div>
    </>
  )
}
