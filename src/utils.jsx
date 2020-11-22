export default function calculatePrice(order) {
  let price = 0
  Object.values(order).forEach((item) =>
    item.forEach((i) => {
      price += i.checked ? i.price : 0
    })
  )
  return price
}
export function orderDescription(order) {
  let desc = `Размер ${order.size.filter((item) => item.checked)[0].name}`
  desc =
    desc +
    (desc ? " · тесто " : "тесто ") +
    order.dough.filter((item) => item.checked)[0].name
  desc =
    desc +
    (desc ? " · соус " : "соус ") +
    order.sauce.filter((item) => item.checked)[0].name
  order.cheese.forEach((item) => {
    if (item.checked) desc = desc + (desc ? " · " : "") + item.name
  })
  order.vegies.forEach((item) => {
    if (item.checked) desc = desc + (desc ? " · " : "") + item.name
  })
  order.meat.forEach((item) => {
    if (item.checked) desc = desc + (desc ? " · " : "") + item.name
  })
  return desc
}
