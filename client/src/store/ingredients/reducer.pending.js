import {
  INGREDIENTS_ERROR,
  INGREDIENTS_PENDING,
  SET_INGREDIENTS,
} from "../constants"

export const ingredientsPending = (state = false, action) => {
  switch (action.type) {
    case INGREDIENTS_PENDING:
      return true
    case SET_INGREDIENTS:
    case INGREDIENTS_ERROR:
      return false
    default:
      return state
  }
}
