import React from "react"
import { useSelector } from "react-redux"
import {
  orderCheese,
  orderDough,
  orderMeat,
  orderSauce,
  orderSize,
  orderVeggies,
} from "../store/order/selectors"
import { getPrice } from "../store/price/selectors"

export const Preview = () => {
  const size = useSelector(orderSize)
  const dough = useSelector(orderDough)
  const sauce = useSelector(orderSauce)
  const cheese = useSelector(orderCheese)
  const veggies = useSelector(orderVeggies)
  const meat = useSelector(orderMeat)
  const price = useSelector(getPrice)

  return (
    <div>
      <div>Описание заказа</div>
      {size[0] && <div>Размер: *{size.map((item) => `${item.name}*`)}</div>}
      {dough[0] && <div>Тесто: *{dough.map((item) => `${item.name}*`)}</div>}
      {sauce[0] && <div>Соус: *{sauce.map((item) => `${item.name}*`)}</div>}
      {cheese[0] && <div>Сыр: *{cheese.map((item) => `${item.name}*`)}</div>}
      {veggies[0] && (
        <div>Овощи: *{veggies.map((item) => `${item.name}*`)}</div>
      )}
      {meat[0] && <div>Мясо: *{meat.map((item) => `${item.name}*`)}</div>}
      <div>Сумма заказа: {price}р</div>
    </div>
  )
}
