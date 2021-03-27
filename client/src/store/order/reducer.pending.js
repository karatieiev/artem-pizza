import {
  SET_ORDER,
  ORDER_ERROR,
  ORDER_PENDING,
  ORDER_POSTED,
} from "../constants"

export const orderPending = (state = false, action) => {
  switch (action.type) {
    case ORDER_PENDING:
      return true
    case ORDER_POSTED:
    case ORDER_ERROR:
    case SET_ORDER:
      return false
    default:
      return state
  }
}
