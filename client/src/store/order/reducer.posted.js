import { BUILD_ORDER, ORDER_NOT_POSTED, ORDER_POSTED } from "../constants"

export const orderPosted = (state = false, action) => {
  switch (action.type) {
    case ORDER_POSTED:
      return true
    case ORDER_NOT_POSTED:
    case BUILD_ORDER:
      return false
    default:
      return state
  }
}
