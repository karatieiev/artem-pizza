import { BUILD_ORDER } from "../constants"
import { buildOrder } from "./buildOrder"

export const orderData = (state = [], action) => {
  switch (action.type) {
    case BUILD_ORDER:
      return buildOrder(action.ingredients, action.selection)
    default:
      return state
  }
}
