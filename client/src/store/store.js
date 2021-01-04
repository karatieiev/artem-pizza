import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { auth } from "./auth/reducer"
import { ingredientsData } from "./ingredients/reducer.data"
import { ingredientsPending } from "./ingredients/reducer.pending"
import { ingredientsError } from "./ingredients/reducer.error"
import { orderData } from "./order/reducer.data"
import { orderPending } from "./order/reducer.pending"
import { orderError } from "./order/reducer.error"
import { orderPosted } from "./order/reducer.posted"
import { orderDescription } from "./order/reducer.description"
import { orderName } from "./order/reducer.name"
import { orderPrice } from "./order/reducer.price"

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
  price: orderPrice,
})

export const store = createStore(
  combineReducers({
    auth,
    ingredients,
    order,
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
