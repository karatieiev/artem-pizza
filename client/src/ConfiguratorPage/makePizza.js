export const makePizza = (menu, selection) => {
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

  return menu.filter((item) => selectedId.includes(item.id))
}
