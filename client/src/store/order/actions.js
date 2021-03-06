import {
  ORDER_ERROR,
  ORDER_PENDING,
  ORDER_POSTED,
  SET_ORDER,
  ORDER_NOT_POSTED,
} from "../constants"
import { postOrder } from "../../api/orders"

export const error = (payload) => ({
  type: ORDER_ERROR,
  payload,
})

export const pending = () => ({
  type: ORDER_PENDING,
})

export const setOrder = (category, id) => ({
  type: SET_ORDER,
  category,
  id,
})

export const orderPosted = () => ({
  type: ORDER_POSTED,
})

export const orderNotPosted = () => ({
  type: ORDER_NOT_POSTED,
})

export const postOrderToServer = (data) => {
  return (dispatch) => {
    dispatch(pending())
    postOrder(data)
      .then(() => dispatch(orderPosted()))
      .catch((err) => dispatch(error(err.message)))
  }
}
