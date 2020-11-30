import { calculatePrice } from "./calculatePrice"

const menu = [
  { id: 0, option: "size", name: "30см", price: 100 },
  { id: 1, option: "size", name: "35см", price: 100 },
  { id: 2, option: "dough", name: "тонкое", price: 0 },
  { id: 3, option: "dough", name: "пышное", price: 0 },
  { id: 4, option: "sauce", name: "томатный", price: 0 },
  { id: 5, option: "sauce", name: "белый", price: 0 },
  { id: 6, option: "sauce", name: "острый", price: 0 },
  { id: 7, option: "cheese", name: "моцарелла", price: 10 },
  { id: 8, option: "cheese", name: "чеддер", price: 10 },
  { id: 9, option: "cheese", name: "дор блю", price: 10 },
  { id: 10, option: "vegies", name: "помидоры", price: 10 },
  { id: 11, option: "vegies", name: "грибы", price: 10 },
  { id: 12, option: "vegies", name: "перец", price: 10 },
  { id: 13, option: "meat", name: "бекон", price: 10 },
  { id: 14, option: "meat", name: "пепперони", price: 10 },
  { id: 15, option: "meat", name: "ветчина", price: 10 },
]

describe("calculatePrice", () => {
  it("validates that price is 100", () => {
    const price = calculatePrice(menu, { size: "0" })
    expect(price).toEqual(100)
  })

  it("validates that price is 130", () => {
    const price = calculatePrice(menu, { size: "0", cheese: ["7", "8", "9"] })
    expect(price).toEqual(130)
  })
})
