export const buildOrder = (order, category, id) => {
  switch (category) {
    case "size":
    case "dough":
    case "sauce":
      return [
        ...order.filter((item) => item.category !== category),
        { category, id },
      ]
    default:
      if (order.some((item) => item.id === id)) {
        return order.filter((item) => item.id !== id)
      }
      return [...order, { category, id }]
  }
}
