export const calculatePrice = (order) => {
  let price = 0
  Object.values(order).forEach((item) =>
    item.forEach((i) => {
      price += i.checked ? i.price : 0
    })
  )
  return price
}
