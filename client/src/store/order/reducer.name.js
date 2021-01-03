import { BUILD_ORDER } from "../constants"
import { buildOrder } from "./buildOrder"
import { buildPizzaName } from "./buildPizzaName"

export const orderName = (state = "", action) => {
  switch (action.type) {
    case BUILD_ORDER:
      return buildPizzaName(buildOrder(action.ingredients, action.selection))
    default:
      return state
  }
}
