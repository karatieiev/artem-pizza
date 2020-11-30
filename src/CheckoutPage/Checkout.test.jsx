import React from "react"
import { fireEvent, render } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { BrowserRouter, Route } from "react-router-dom"
import { Checkout } from "./Checkout"
import {
  PizzaProvider,
  usePizzaContext,
} from "../sharedComponents/PizzaContext"

const SetPizzaContext = () => {
  const { setPizza } = usePizzaContext()
  React.useEffect(() => {
    setPizza([{ id: 1, option: "size", name: "35см", price: 250 }])
  }, [setPizza])
  return null
}

describe("Checkout", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <PizzaProvider>
        <SetPizzaContext />
        <Checkout />
      </PizzaProvider>
    )
    expect(getByText("Оформление заказа")).toBeInTheDocument()
    expect(getByText("Номер карты:")).toBeInTheDocument()
    expect(getByText("Оплатить 250 р")).toBeInTheDocument()
  })

  describe("input card number", () => {
    it("defines Visa card", () => {
      const { getByText, getByLabelText } = render(
        <PizzaProvider>
          <SetPizzaContext />
          <Checkout />
        </PizzaProvider>
      )

      fireEvent.input(getByLabelText("Номер карты:"), {
        target: { value: "4000000000000000" },
      })

      expect(getByText("Visa")).toBeInTheDocument()
    })

    it("defines MasterCard card", () => {
      const { getByText, getByLabelText } = render(
        <PizzaProvider>
          <SetPizzaContext />
          <Checkout />
        </PizzaProvider>
      )

      fireEvent.input(getByLabelText("Номер карты:"), {
        target: { value: "5000000000000000" },
      })

      expect(getByText("MasterCard")).toBeInTheDocument()
    })
  })
  describe("on submit", () => {
    it("collects card number", async () => {
      const formSubmit = jest.fn()
      const { getByLabelText, getByText } = render(
        <BrowserRouter>
          <Route>
            <PizzaProvider>
              <SetPizzaContext />
              <Checkout formSubmit={formSubmit} />
            </PizzaProvider>
          </Route>
        </BrowserRouter>
      )

      fireEvent.input(getByLabelText("Номер карты:"), {
        target: { value: "5555555555555555" },
      })

      await act(async () => {
        fireEvent.click(getByText("Оплатить 250 р"))
      })

      expect(formSubmit).toBeCalledWith({
        card: "5555 5555 5555 5555",
      })
    })
  })
})
