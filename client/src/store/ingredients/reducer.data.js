import { SET_INGREDIENTS } from "../constants"

export const ingredientsData = (state = [], action) => {
  switch (action.type) {
    case SET_INGREDIENTS:
      return action.payload
    default:
      return state
  }
}
