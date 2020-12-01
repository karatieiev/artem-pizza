import React from "react"
import { fireEvent, render } from "@testing-library/react"
import { BrowserRouter, Route } from "react-router-dom"
import { act } from "react-dom/test-utils"
import { Login } from "./Login"
import { AuthProvider } from "../sharedComponents/AuthContext"

describe("Login", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Route>
          <Login />
        </Route>
      </BrowserRouter>
    )
    expect(getByText("Аутентификация")).toBeInTheDocument()
    expect(getByText("Вход")).toBeInTheDocument()
  })

  describe("on submit", () => {
    it("collects login and password", async () => {
      const formSubmit = jest.fn()
      const { getByText, getByLabelText } = render(
        <BrowserRouter>
          <Route>
            <AuthProvider>
              <Login submitForm={formSubmit} />
            </AuthProvider>
          </Route>
        </BrowserRouter>
      )
      fireEvent.input(getByLabelText("Логин"), { target: { value: "log" } })
      fireEvent.input(getByLabelText("Пароль"), { target: { value: "pass" } })

      await act(async () => {
        fireEvent.click(getByText("Вход"))
      })

      expect(formSubmit).toBeCalledWith({
        login: "log",
        password: "pass",
      })
    })
  })
})
