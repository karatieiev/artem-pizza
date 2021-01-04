export const calculatePrice = (ingredients, selection) => {
  const selectedIDs = []

  Object.keys(selection).forEach((key) => {
    switch (key) {
      case "size":
      case "dough":
      case "sauce":
        selectedIDs.push(selection[key])
        break
      default:
        selection[key].forEach((id) => {
          selectedIDs.push(id)
        })
        break
    }
  })

  return ingredients.reduce(
    (sum, current) =>
      selectedIDs.includes(current.id) ? sum + +current.price : sum,
    0
  )
}
