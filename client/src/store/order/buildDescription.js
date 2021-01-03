export const buildDescription = (order) => {
  let desc = order.filter((i) => i.category === "size")[0]?.name
  let name =
    order.filter((i) => i.category === "dough")[0]?.slug === "thin"
      ? "на тонком тесте"
      : "на толстом тесте"
  desc = `${desc} • ${name}`

  name = order.filter((i) => i.category === "sauce")[0]?.name
  desc = `${desc} • ${name}`

  order
    .filter((i) => i.category === "cheese")
    .forEach((el) => {
      desc = `${desc} • ${el.name}`
    })

  order
    .filter((i) => i.category === "veggies")
    .forEach((el) => {
      desc = `${desc} • ${el.name}`
    })

  order
    .filter((i) => i.category === "meat")
    .forEach((el) => {
      desc = `${desc} • ${el.name}`
    })

  return desc
}
