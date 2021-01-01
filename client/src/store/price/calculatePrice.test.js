import { calculatePrice } from "./calculatePrice"

const ingredients = [
  { id: "0", category: "size", name: "30см", price: 100 },
  { id: "1", category: "size", name: "35см", price: 100 },
  { id: "2", category: "dough", name: "тонкое", price: 0 },
  { id: "3", category: "dough", name: "пышное", price: 0 },
  { id: "4", category: "sauce", name: "томатный", price: 0 },
  { id: "5", category: "sauce", name: "белый", price: 0 },
  { id: "6", category: "sauce", name: "острый", price: 0 },
  { id: "7", category: "cheese", name: "моцарелла", price: 10 },
  { id: "8", category: "cheese", name: "чеддер", price: 10 },
  { id: "9", category: "cheese", name: "дор блю", price: 10 },
  { id: "10", category: "veggies", name: "помидоры", price: 10 },
  { id: "11", category: "veggies", name: "грибы", price: 10 },
  { id: "12", category: "veggies", name: "перец", price: 10 },
  { id: "13", category: "meat", name: "бекон", price: 10 },
  { id: "14", category: "meat", name: "пепперони", price: 10 },
  { id: "15", category: "meat", name: "ветчина", price: 10 },
]

describe("calculatePrice", () => {
  it("validates that price is 100", () => {
    const price = calculatePrice(ingredients, { size: "0" })
    expect(price).toEqual(100)
  })

  it("validates that price is 130", () => {
    const price = calculatePrice(ingredients, {
      size: "0",
      cheese: ["7", "8", "9"],
    })
    expect(price).toEqual(130)
  })
})
