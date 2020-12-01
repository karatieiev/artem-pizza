export const calculatePrice = (menu, selection) => {
  const selectedId = []

  Object.keys(selection).forEach((key) => {
    switch (key) {
      case "size":
      case "dough":
      case "sauce":
        selectedId.push(+selection[key])
        break
      default:
        selection[key].forEach((id) => {
          selectedId.push(+id)
        })
        break
    }
  })

  return menu.reduce(
    (sum, current) =>
      selectedId.includes(current.id) ? sum + current.price : sum,
    0
  )
}
