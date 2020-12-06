import React from "react"
import { render } from "@testing-library/react"
import { Preview } from "./Preview"
import {
  PizzaProvider,
  usePizzaContext,
} from "../sharedComponents/PizzaContext"

const SetContext = () => {
  const { setPizza } = usePizzaContext()
  React.useEffect(() => {
    setPizza([
      { slug: "1", category: "size", name: "35см", price: 250 },
      { slug: "3", category: "dough", name: "пышное", price: 0 },
      { slug: "6", category: "sauce", name: "острый", price: 0 },
      { slug: 8, category: "cheese", name: "чеддер", price: 29 },
      { slug: 10, category: "veggies", name: "помидоры", price: 29 },
      { slug: 11, category: "veggies", name: "грибы", price: 29 },
      { slug: 12, category: "veggies", name: "перец", price: 29 },
      { slug: 13, category: "meat", name: "бекон", price: 29 },
    ])
  }, [setPizza])
  return null
}

describe("Preview", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <PizzaProvider>
        <SetContext />
        <Preview />
      </PizzaProvider>
    )
    expect(getByText("Размер: *35см*")).toBeInTheDocument()
    expect(getByText("Тесто: *пышное*")).toBeInTheDocument()
    expect(getByText("Соус: *острый*")).toBeInTheDocument()
    expect(getByText("Сыр: *чеддер*")).toBeInTheDocument()
    expect(getByText("Овощи: *помидоры*грибы*перец*")).toBeInTheDocument()
    expect(getByText("Мясо: *бекон*")).toBeInTheDocument()
  })
})
