import { buildDescription } from "./buildDescription"
import { buildPizzaName } from "./buildPizzaName"

export const orderData = (state) => state.order.data
export const orderPending = (state) => state.order.pending
export const orderError = (state) => state.order.error
export const orderPosted = (state) => state.order.posted

export const orderDescription = (state) => {
  const order = []
  state.order.data.forEach((orderItem) => {
    order.push(
      state.ingredients.data.find(
        (ingredientItem) => ingredientItem.id === orderItem.id
      )
    )
  })
  return buildDescription(order)
}

export const orderImages = (state) => {
  let order = []
  state.order.data.forEach((orderItem) => {
    order.push(
      state.ingredients.data.find(
        (ingredientItem) => ingredientItem.id === orderItem.id
      )
    )
  })
  order = order.filter(
    (item) => item.category !== "sauce" && item.category !== "size"
  )
  let images = order.filter((item) => item.category === "dough")
  images = [...images, ...order.filter((item) => item.category === "cheese")]
  images = [...images, ...order.filter((item) => item.category === "meat")]
  images = [
    ...images,
    ...order.filter((item) => item.category === "vegetables"),
  ]
  return images
}

export const orderName = (state) => {
  const order = []
  state.order.data.forEach((orderItem) => {
    order.push(
      state.ingredients.data.find(
        (ingredientItem) => ingredientItem.id === orderItem.id
      )
    )
  })
  return buildPizzaName(order)
}

export const orderPrice = (state) => {
  return state.ingredients.data.reduce(
    (sum, current) =>
      state.order.data.some((item) => item.id === current.id)
        ? sum + +current.price
        : sum,
    0
  )
}
