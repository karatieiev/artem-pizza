import { getProcessingSystem } from "./getProcessingSystem"

describe("getProcessingSystem", () => {
  it("defines Visa", () => {
    const system = getProcessingSystem("4444 4444 4444 4444")
    expect(system).toEqual("Visa")
  })
  it("defines MasterCard", () => {
    const system = getProcessingSystem("5555 5555 5555 5555")
    expect(system).toEqual("MasterCard")
  })
  it("defines unknown processing system", () => {
    const system = getProcessingSystem("6666 6666 6666 6666")
    expect(system).toEqual("Unknown")
  })
  it("can't define processing system, wrong number format", () => {
    const system = getProcessingSystem("fdfdf 3434")
    expect(system).toEqual("")
  })
})
