import { apiGetIngredients } from "../../api/ingredients"
import {
  INGREDIENTS_ERROR,
  INGREDIENTS_PENDING,
  SET_INGREDIENTS,
} from "../constants"

export const error = (payload) => ({
  type: INGREDIENTS_ERROR,
  payload,
})

export const pending = () => ({
  type: INGREDIENTS_PENDING,
})

export const setIngredients = (payload) => ({
  type: SET_INGREDIENTS,
  payload,
})

export const getIngredientsFromServer = () => {
  return (dispatch) => {
    dispatch(pending())
    apiGetIngredients()
      .then((data) => {
        dispatch(setIngredients(data))
      })
      .catch((err) => {
        dispatch(error(err.message))
      })
  }
}
