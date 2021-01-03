import { BUILD_ORDER } from "../constants"
import { buildDescription } from "./buildDescription"
import { buildOrder } from "./buildOrder"

export const orderDescription = (state = "", action) => {
  switch (action.type) {
    case BUILD_ORDER:
      return buildDescription(buildOrder(action.ingredients, action.selection))
    default:
      return state
  }
}
