import { LOG_IN, LOG_OUT } from "../constants"
import { auth } from "./reducer"

describe("auth reducer", () => {
  it("equals true when login", () => {
    const reducer = auth(false, { type: LOG_IN })
    expect(reducer).toEqual(true)
  })
  it("equals false when logout", () => {
    const reducer = auth(false, { type: LOG_OUT })
    expect(reducer).toEqual(false)
  })
})
