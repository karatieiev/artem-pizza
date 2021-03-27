import { SET_ORDER } from "../constants"
import { buildOrder } from "./buildOrder"

export const orderData = (state = [], action) => {
  switch (action.type) {
    case SET_ORDER:
      return buildOrder(state, action.category, action.id)
    default:
      return state
  }
}
