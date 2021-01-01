import { INGREDIENTS_ERROR, SET_INGREDIENTS } from "../constants"

export const ingredientsError = (state = "", action) => {
  switch (action.type) {
    case INGREDIENTS_ERROR:
      return action.payload
    case SET_INGREDIENTS:
      return ""
    default:
      return state
  }
}
