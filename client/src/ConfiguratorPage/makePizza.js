export const makePizza = (ingredients, selection) => {
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

  return ingredients.filter((item) => selectedIDs.includes(item.id))
}
