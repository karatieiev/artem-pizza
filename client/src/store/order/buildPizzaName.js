const getSlugs = (order) => {
  const slugs = new Set()

  order.forEach((el) => {
    slugs.add(el.slug)
  })

  return slugs
}

const getCategiries = (order) => {
  const categories = new Set()

  order.forEach((el) => {
    categories.add(el.category)
  })

  return categories
}

export const buildPizzaName = (order) => {
  const slugs = getSlugs(order)
  const categories = getCategiries(order)

  if (slugs.has("mozzarella") && slugs.size === 4) {
    return "Маргарита"
  }

  if (slugs.size >= 11) {
    return "Все в кучу"
  }

  if (categories.has("veggies") && categories.size === 4) {
    return "Вегетарианская"
  }

  if (categories.has("cheese") && categories.size === 4) {
    return "Сырная"
  }

  if (categories.has("meat") && categories.size === 4) {
    return "Мясная"
  }

  return "Сборная"
}
