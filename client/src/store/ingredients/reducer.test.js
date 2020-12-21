import {
  INGREDIENTS_ERROR,
  INGREDIENTS_PENDING,
  SET_INGREDIENTS,
} from "../constants"
import { ingredientsData } from "./reducer.data"
import { ingredientsError } from "./reducer.error"
import { ingredientsPending } from "./reducer.pending"

describe("ingredients reducers", () => {
  describe("reducer.data", () => {
    it("sets ingredients correctly", () => {
      const reducer = ingredientsData([], {
        type: SET_INGREDIENTS,
        payload: ["1"],
      })
      expect(reducer).toEqual(["1"])
    })
  })
  describe("reducer.error", () => {
    it("makes the error message", () => {
      const reducer = ingredientsError("no error", {
        type: INGREDIENTS_ERROR,
        payload: "some error",
      })
      expect(reducer).toEqual("some error")
    })
    it("clears the error message when getting ingredients", () => {
      const reducer = ingredientsError("no error", {
        type: SET_INGREDIENTS,
        payload: "some error",
      })
      expect(reducer).toEqual("")
    })
  })
  describe("reducer.pending", () => {
    it("equals true when pending", () => {
      const reducer = ingredientsPending(false, { type: INGREDIENTS_PENDING })
      expect(reducer).toEqual(true)
    })
    it("equals false when getting ingredients", () => {
      const reducer = ingredientsPending(true, { type: SET_INGREDIENTS })
      expect(reducer).toEqual(false)
    })
  })
})
