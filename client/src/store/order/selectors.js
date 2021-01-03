export const orderData = (state) => state.order.data
export const orderPending = (state) => state.order.pending
export const orderError = (state) => state.order.error
export const orderPosted = (state) => state.order.posted
export const orderSize = (state) =>
  state.order.data.filter((item) => item.category === "size")
export const orderDough = (state) =>
  state.order.data.filter((item) => item.category === "dough")
export const orderSauce = (state) =>
  state.order.data.filter((item) => item.category === "sauce")
export const orderCheese = (state) =>
  state.order.data.filter((item) => item.category === "cheese")
export const orderVeggies = (state) =>
  state.order.data.filter((item) => item.category === "veggies")
export const orderMeat = (state) =>
  state.order.data.filter((item) => item.category === "meat")
export const orderDescription = (state) => state.order.description
export const orderName = (state) => state.order.name
export const orderPrice = (state) => state.order.price
