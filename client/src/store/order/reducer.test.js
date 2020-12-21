import {
  BUILD_ORDER,
  ORDER_ERROR,
  ORDER_PENDING,
  ORDER_POSTED,
} from "../constants"
import { orderPosted } from "./reducer.posted"
import { orderData } from "./reducer.data"
import { orderError } from "./reducer.error"
import { orderPending } from "./reducer.pending"

describe("order reducers", () => {
  describe("reducer.data", () => {
    it("builds order correctly", () => {
      const reducer = orderData([], {
        type: BUILD_ORDER,
        ingredients: [
          { id: "1", category: "size" },
          { id: "2", category: "size" },
        ],
        selection: { size: "1" },
      })
      expect(reducer).toEqual([{ id: "1", category: "size" }])
    })
  })
  describe("reducer.error", () => {
    it("makes error message", () => {
      const reducer = orderError("no error", {
        type: ORDER_ERROR,
        payload: "some error",
      })
      expect(reducer).toEqual("some error")
    })
    it("clears the error message when building order", () => {
      const reducer = orderError("no error", {
        type: BUILD_ORDER,
        payload: "some error",
      })
      expect(reducer).toEqual("")
    })
  })
  describe("reducer.pending", () => {
    it("equals true when pending", () => {
      const reducer = orderPending(false, { type: ORDER_PENDING })
      expect(reducer).toEqual(true)
    })
    it("equals false when data posted", () => {
      const reducer = orderPending(false, { type: ORDER_POSTED })
      expect(reducer).toEqual(false)
    })
  })
  describe("reducer.posted", () => {
    it("equals true when data posted", () => {
      const reducer = orderPosted(false, { type: ORDER_POSTED })
      expect(reducer).toEqual(true)
    })
    it("equals false when building order", () => {
      const reducer = orderPosted(true, { type: BUILD_ORDER })
      expect(reducer).toEqual(false)
    })
  })
})
