export const ingredientsData = (state) => state.ingredients.data
export const ingredientsPending = (state) => state.ingredients.pending
export const ingredientsError = (state) => state.ingredients.error
export const ingredientsCategorySize = (state) =>
  state.ingredients.data.filter((item) => item.category === "size")
export const ingredientsCategoryDough = (state) =>
  state.ingredients.data.filter((item) => item.category === "dough")
export const ingredientsCategorySauce = (state) =>
  state.ingredients.data.filter((item) => item.category === "sauce")
export const ingredientsCategoryCheese = (state) =>
  state.ingredients.data.filter((item) => item.category === "cheese")
export const ingredientsCategoryVeggies = (state) =>
  state.ingredients.data.filter((item) => item.category === "vegetables")
export const ingredientsCategoryMeat = (state) =>
  state.ingredients.data.filter((item) => item.category === "meat")
