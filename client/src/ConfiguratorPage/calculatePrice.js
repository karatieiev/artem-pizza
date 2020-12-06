export const calculatePrice = (ingredients, selection) => {
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

  return ingredients.reduce(
    (sum, current) =>
      selectedSlugs.includes(current.slug) ? sum + +current.price : sum,
    0
  )
}
