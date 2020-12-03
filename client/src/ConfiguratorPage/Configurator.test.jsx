import React from "react"
import { fireEvent, render } from "@testing-library/react"
import { Configurator } from "./Configurator"

describe("Configurator", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Configurator />)
    expect(getByText("Размер")).toBeInTheDocument()
    expect(getByText("Тесто")).toBeInTheDocument()
    expect(getByText("Соус")).toBeInTheDocument()
    expect(getByText("Сыр")).toBeInTheDocument()
    expect(getByText("Овощи")).toBeInTheDocument()
    expect(getByText("Мясо")).toBeInTheDocument()
  })
  describe("only with size checked", () => {
    it("shows correct price for different sizes", () => {
      const { getByText } = render(<Configurator />)
      let element = getByText("30см")
      fireEvent.click(element)
      expect(getByText("Заказать 200р")).toBeInTheDocument()
      element = getByText("35см")
      fireEvent.click(element)
      expect(getByText("Заказать 250р")).toBeInTheDocument()
    })
  })
  describe("with all additions checked", () => {
    it("shows maximum price", () => {
      const { getByText } = render(<Configurator />)
      let element = getByText("35см")
      fireEvent.click(element)
      element = getByText("моцарелла")
      fireEvent.click(element)
      element = getByText("чеддер")
      fireEvent.click(element)
      element = getByText("дор блю")
      fireEvent.click(element)
      element = getByText("помидоры")
      fireEvent.click(element)
      element = getByText("грибы")
      fireEvent.click(element)
      element = getByText("перец")
      fireEvent.click(element)
      element = getByText("бекон")
      fireEvent.click(element)
      element = getByText("пепперони")
      fireEvent.click(element)
      element = getByText("ветчина")
      fireEvent.click(element)
      expect(getByText("Заказать 511р")).toBeInTheDocument()
    })
  })
})
