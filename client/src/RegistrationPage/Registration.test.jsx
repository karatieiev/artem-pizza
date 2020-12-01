import React from "react"
import { fireEvent, render } from "@testing-library/react"
import { BrowserRouter, Route } from "react-router-dom"
import { act } from "react-dom/test-utils"
import { Registration } from "./Registration"

describe("Registration", () => {
  it("render correctly", () => {
    const { getByText, getAllByText } = render(
      <BrowserRouter>
        <Route>
          <Registration />
        </Route>
      </BrowserRouter>
    )
    expect(getByText("Логин")).toBeInTheDocument()
    expect(getByText("Пароль")).toBeInTheDocument()
    getAllByText("Регистрация").forEach((item) =>
      expect(item).toBeInTheDocument()
    )
  })

  describe("on submit", () => {
    it("collects login and password", async () => {
      const formSubmit = jest.fn()
      const { getByLabelText, getByTestId } = render(
        <BrowserRouter>
          <Route>
            <Registration formSubmit={formSubmit} />
          </Route>
        </BrowserRouter>
      )
      fireEvent.input(getByLabelText("Логин"), { target: { value: "log" } })
      fireEvent.input(getByLabelText("Пароль"), { target: { value: "pass" } })

      await act(async () => {
        fireEvent.click(getByTestId("btnSubmit"))
      })

      expect(formSubmit).toBeCalledWith({
        login: "log",
        password: "pass",
      })
    })
  })
})
