export const makePizza = (ingredients, selection) => {
  const selectedSlugs = []

  Object.keys(selection).forEach((key) => {
    switch (key) {
      case "size":
      case "dough":
      case "sauce":
        selectedSlugs.push(selection[key])
        break
      default:
        selection[key].forEach((slug) => {
          selectedSlugs.push(slug)
        })
        break
    }
  })

  return ingredients.filter((item) => selectedSlugs.includes(item.slug))
}
