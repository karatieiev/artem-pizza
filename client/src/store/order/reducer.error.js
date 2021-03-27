import { SET_ORDER, ORDER_ERROR, ORDER_POSTED } from "../constants"

export const orderError = (state = "", action) => {
  switch (action.type) {
    case ORDER_ERROR:
      return action.payload
    case ORDER_POSTED:
    case SET_ORDER:
      return ""
    default:
      return state
  }
}
