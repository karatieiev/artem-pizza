import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { auth } from "./auth/reducer"
import { ingredientsData } from "./ingredients/reducer.data"
import { ingredientsPending } from "./ingredients/reducer.pending"
import { ingredientsError } from "./ingredients/reducer.error"
import { orderData } from "./order/reducer.data"
import { price } from "./price/reducer"
import { orderPending } from "./order/reducer.pending"
import { orderError } from "./order/reducer.error"
import { orderPosted } from "./order/reducer.posted"
import { orderDescription } from "./order/reducer.description"
import { orderName } from "./order/reducer.name"

const ingredients = combineReducers({
  data: ingredientsData,
  pending: ingredientsPending,
  error: ingredientsError,
})

const order = combineReducers({
  data: orderData,
  pending: orderPending,
  error: orderError,
  posted: orderPosted,
  description: orderDescription,
  name: orderName,
})

export const store = createStore(
  combineReducers({
    auth,
    ingredients,
    order,
    price,
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
