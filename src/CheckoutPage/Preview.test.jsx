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
      { id: 1, option: "size", name: "35см", price: 250 },
      { id: 3, option: "dough", name: "пышное", price: 0 },
      { id: 6, option: "sauce", name: "острый", price: 0 },
      { id: 8, option: "cheese", name: "чеддер", price: 29 },
      { id: 10, option: "vegies", name: "помидоры", price: 29 },
      { id: 11, option: "vegies", name: "грибы", price: 29 },
      { id: 12, option: "vegies", name: "перец", price: 29 },
      { id: 13, option: "meat", name: "бекон", price: 29 },
    ])
  }, [])
  return null
}

describe("Preview", () => {
  it("render correctly", () => {
    const { getByText } = render(
      <PizzaProvider>
        <SetContext />
        <Preview />
      </PizzaProvider>
    )
    expect(getByText("Размер: 35см")).toBeInTheDocument()
    expect(getByText("Тесто: пышное")).toBeInTheDocument()
    expect(getByText("Соус: острый")).toBeInTheDocument()
    expect(getByText("Сыр: чеддер")).toBeInTheDocument()
    expect(getByText("Овощи: помидоры, грибы, перец")).toBeInTheDocument()
    expect(getByText("Мясо: бекон")).toBeInTheDocument()
  })
})
