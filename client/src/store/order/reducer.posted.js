import { SET_ORDER, ORDER_NOT_POSTED, ORDER_POSTED } from "../constants"

export const orderPosted = (state = false, action) => {
  switch (action.type) {
    case ORDER_POSTED:
      return true
    case ORDER_NOT_POSTED:
    case SET_ORDER:
      return false
    default:
      return state
  }
}
