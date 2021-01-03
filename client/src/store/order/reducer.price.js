import { BUILD_ORDER } from "../constants"
import { calculatePrice } from "./calculatePrice"

export const orderPrice = (state = 0, action) => {
  switch (action.type) {
    case BUILD_ORDER:
      return calculatePrice(action.ingredients, action.selection)
    default:
      return state
  }
}
